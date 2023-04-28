import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, EMPTY, expand, filter, map, Observable, reduce, switchMap, tap, toArray} from 'rxjs';
import {CoreService} from '../../core/core.service';
import {Team} from './model/team.model';
import {TeamData} from './model/team-data.model';
import {Game} from './model/game.model';
import {DatePipe} from '@angular/common';
import {Store} from '../../store';
import {GameData} from './model/game-data.model';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    private _httpOptions = {
        headers: new HttpHeaders({
            'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX', 'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        })
    };

    private _TEAM_IDS: string = 'teamIds';

    constructor(private http: HttpClient, private store: Store, private datePipe: DatePipe, private coreService: CoreService) {
    }

    readTeamIds(): Observable<number[]> {
        let teamIds: number [] = this.getTeamIds();
        if (teamIds) {
            this.store.setTeamIds(teamIds);
        }
        return this.store.getTeamIds();
    }

    addTeamId(teamId: number) {
        let teamIds: number [] = this.getTeamIds();
        if (!teamIds.includes(teamId)) {
            this.store.setTeamIds([...teamIds, teamId]);
            localStorage.setItem(this._TEAM_IDS, [...teamIds, teamId].join(','));
        }
    }

    deleteTeamId(teamId: number) {
        let teamIds: number [] = this.getTeamIds();
        teamIds = teamIds.filter(e => e !== teamId);
        this.store.setTeamIds(teamIds);
        if (teamIds.length) {
            localStorage.setItem(this._TEAM_IDS, teamIds.join(','));
        } else {
            localStorage.removeItem(this._TEAM_IDS);
        }
    }

    private getTeamIds() {
        return (localStorage.getItem(this._TEAM_IDS)?.split(',') || []).map(teamId => parseInt(teamId, 10));
    }

    getAllTeams(): Observable<TeamData[]> {
        return this.getTeams(1).pipe(expand(res => res.meta.next_page ? this.getTeams(res.meta.next_page) : EMPTY),
            map(res => res.data.filter(team => team.city)), reduce((acc, val) => acc.concat(val), [] as TeamData[]),
            tap(res => this.store.setTeams(res)));
    }

    private getTeams(page: number): Observable<Team> {
        return this.http.get<Team>(`https://free-nba.p.rapidapi.com/teams?page=${page}`, this._httpOptions)
                   .pipe(catchError(this.coreService.handleError));
    }

    getGames(teamId: number): Observable<GameData[]> {
        let params = new HttpParams();
        params = params.append('page', 0);
        params = params.append('team_ids[]', teamId);

        const dates: (string | null)[] = [...Array(12)].map((_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - i);
            return this.datePipe.transform(d, 'yyyy-MM-dd');
        });

        dates.forEach(date => {
            params = params.append('dates[]', date!);
        });

        return this.http.get<Game>(`https://free-nba.p.rapidapi.com/games`, {params: params, headers: this._httpOptions.headers})
                   .pipe(map(res => res.data), switchMap(data => data), filter(game => game.home_team_score > 0), toArray(),
                       tap(res => this.store.setGames(teamId, res)), catchError(this.coreService.handleError));
    }
}
