import {State} from './state';
import {BehaviorSubject, Observable, distinctUntilChanged, pluck, tap, map} from 'rxjs';
import {TeamData} from './team-tracking/shared/team-data.model';
import {GameData} from './team-tracking/shared/game-data.model';

const state: State = {
    teamIds: [], teams: [], games: {}
};

export class Store {

    private subject: BehaviorSubject<State> = new BehaviorSubject<State>(state);
    private store: Observable<State> = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
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

    setTeamIds(state: number[]) {
        this.subject.next({
            ...this.value, teamIds: state
        });
    }

    setTeams(state: TeamData[]) {
        this.subject.next({
            ...this.value, teams: state
        });
    }

    setGames(teamId: number, state: GameData[]) {
        const newState: State = {
            ...this.value
        };
        newState.games[teamId] = state;
        this.subject.next(newState);
    }
}
