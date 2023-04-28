import {State} from './state';
import {BehaviorSubject, distinctUntilChanged, map, Observable} from 'rxjs';
import {TeamData} from './team-tracking/shared/model/team-data.model';
import {GameData} from './team-tracking/shared/model/game-data.model';

const state: State = {
    teamIds: [], teams: [], games: {}
};

export class Store {

    private subject: BehaviorSubject<State> = new BehaviorSubject<State>(state);
    private store: Observable<State> = this.subject.asObservable().pipe(distinctUntilChanged());

    get value(): State {
        return this.subject.value;
    }

    getTeamIds(): Observable<number[]> {
        return this.store.pipe(map(state => state.teamIds));
    }

    getTeams(): Observable<TeamData[]> {
        return this.store.pipe(map(state => state.teams));
    }

    getGames(): Observable<{
        [teamId: number]: GameData[];
    }> {
        return this.store.pipe(map(state => state.games));
    }

    setTeamIds(state: number[]): void {
        this.subject.next({
            ...this.value, teamIds: state
        });
    }

    setTeams(state: TeamData[]): void {
        this.subject.next({
            ...this.value, teams: state
        });
    }

    setGames(teamId: number, state: GameData[]): void {
        const newState: State = {
            ...this.value
        };
        newState.games[teamId] = state;
        this.subject.next(newState);
    }
}
