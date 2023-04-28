import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '../../store';
import {TeamService} from '../shared/team.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, Observable, Subscription} from 'rxjs';
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
    team!: TeamData;

    games$!: Observable<GameData[]>;

    constructor(private router: Router, private route: ActivatedRoute, private store: Store, private teamService: TeamService,
                private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.teamCode = `${this.route.snapshot.paramMap.get('teamCode')}`;

        this.subscriptions.add(this.store.getTeams().subscribe(teams => {
            const team: TeamData | undefined = teams.find(team => team.abbreviation == this.teamCode);
            if (team != undefined) {
                this.team = {...team};
                this.games$ = this.store.getGames().pipe(map(games => games[this.team.id]));
                this.changeDetector.detectChanges();
            } else {
                this.router.navigateByUrl('/team-tracking');
            }
        }));

        if (this.team) this.subscriptions.add(this.teamService.getGames(this.team.id).subscribe());
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
