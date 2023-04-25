import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, catchError, EMPTY, expand, filter, from, map, Observable, of, reduce, retry, tap} from 'rxjs';
import {CoreService} from '../../core/core.service';
import {Team} from './team.model';
import {TeamData} from './team-data.model';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    private _httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        })
    };

    public teamCodes = new BehaviorSubject<string[]>([]);
    public teamCodes$: Observable<string[]> = this.teamCodes.asObservable();

    constructor(private http: HttpClient, private coreService: CoreService) {
    }

    getAllTeams(): Observable<TeamData[]> {
        return this.getTeams(1).pipe(expand(res => res.meta.next_page ? this.getTeams(res.meta.next_page) : EMPTY),
            map(res => res.data.filter(team => team.city)), reduce((acc, val) => acc.concat(val), [] as TeamData[]));
    }

    private getTeams(page: number): Observable<Team> {
        return this.http.get<Team>(`https://free-nba.p.rapidapi.com/teams?page=${page}`, this._httpOptions)
                   .pipe(tap(response => console.log(response)), catchError(this.coreService.handleError<any>('getTeams', null)));
    }
}
