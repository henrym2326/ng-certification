import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '../../store';
import {TeamService} from '../shared/team.service';
import {ActivatedRoute, Router} from '@angular/router';
import {find, map, Observable, Subscription, switchMap, take} from 'rxjs';
import {GameData} from '../shared/model/game-data.model';
import {TeamData} from '../shared/model/team-data.model';

@Component({
    selector: 'app-team-results',
    templateUrl: './team-results.component.html',
    styleUrls: ['./team-results.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TeamResultsComponent implements OnInit, OnDestroy {

    subscriptions: Subscription = new Subscription();

    teamCode!: string;
    team$!: Observable<TeamData | undefined>;
    games$!: Observable<GameData[]>;

    constructor(private router: Router, private route: ActivatedRoute, private store: Store, private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.teamCode = `${this.route.snapshot.paramMap.get('teamCode')}`;
        this.team$ = this.store.getTeams().pipe(switchMap(teams => teams), find(team => team.abbreviation == this.teamCode));
        this.subscriptions.add(this.team$.subscribe(team => {
            if (team) {
                this.games$ = this.store.getGames().pipe(map(games => games[team!.id]));
                this.teamService.getGames(team.id).pipe(take(1)).subscribe();
            }
        }));

        // needed if teams store not initialised e.g. via bookmark
        this.subscriptions.add(this.teamService.getAllTeams().subscribe());
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
