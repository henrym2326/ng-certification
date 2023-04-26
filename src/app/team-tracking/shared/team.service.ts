import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, catchError, EMPTY, expand, filter, from, map, Observable, of, reduce, retry, tap} from 'rxjs';
import {CoreService} from '../../core/core.service';
import {Team} from './team.model';
import {TeamData} from './team-data.model';
import {Game} from './game.model';
import {DatePipe} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    private _httpOptions = {
        headers: new HttpHeaders({
            'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        })
    };

    private _TEAM_IDS: string = 'teamIds';

    public teamIds = new BehaviorSubject<number[]>([]);
    public teamIds$: Observable<number[]> = this.teamIds.asObservable();

    constructor(private http: HttpClient, private datePipe: DatePipe, private coreService: CoreService) {
    }

    readTeamIds(): Observable<number[]> {
        let teamIds: number [] = this.getTeamIds();
        console.log(localStorage.getItem(this._TEAM_IDS));
        console.log([...teamIds]);
        if (teamIds) {
            this.teamIds.next([...teamIds]);
        }
        return this.teamIds$;
    }

    addTeamId(teamId: number) {
        let teamIds: number [] = this.getTeamIds();
        console.log(teamId);
        if (!teamIds.includes(teamId)) {
            this.teamIds.next([...teamIds, teamId]);
            console.log([...teamIds]);
            localStorage.setItem(this._TEAM_IDS, [...teamIds, teamId].join(','));
        }
    }

    deleteTeamId(teamId: number) {
        console.log(teamId);
        let teamIds: number [] = this.getTeamIds();
        // console.log([...this.teamIds]);
        teamIds = teamIds.filter(e => e !== teamId);
        this.teamIds.next([...teamIds]);
        // console.log([...this.teamIds]);
        if (teamIds.length) {
            localStorage.setItem(this._TEAM_IDS, teamIds.join(','));
            console.log(teamId);
        } else {
            localStorage.removeItem(this._TEAM_IDS);
            console.log(teamId);
        }
    }

    private getTeamIds() {
        return (localStorage.getItem(this._TEAM_IDS)?.split(',') || []).map(teamId => parseInt(teamId, 10));
    }

    getAllTeams(): Observable<TeamData[]> {
        return this.getTeams(1).pipe(expand(res => res.meta.next_page ? this.getTeams(res.meta.next_page) : EMPTY),
            map(res => res.data.filter(team => team.city)), reduce((acc, val) => acc.concat(val), [] as TeamData[]));
    }

    private getTeams(page: number): Observable<Team> {
        return this.http.get<Team>(`https://free-nba.p.rapidapi.com/teams?page=${page}`, this._httpOptions)
                   .pipe(tap(response => console.log(response)), catchError(this.coreService.handleError));
    }

    getGameResults(teamId: number): Observable<Game> {
        let params = new HttpParams();
        params = params.append('page', 0);
        params = params.append('team_ids[]', teamId);

        const dates: (string | null)[] = [...Array(12)].map((_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - i);
            return this.datePipe.transform(d, 'yyyy-MM-dd');
        });

        console.log(dates);
        dates.forEach(date => {
            params = params.append('dates[]', date!);
        });
        console.log(params);

        return this.http.get<Game>(`https://free-nba.p.rapidapi.com/games`, {params: params, headers: this._httpOptions.headers})
                   .pipe(tap(response => console.log(response)), catchError(this.coreService.handleError));
    }
}
