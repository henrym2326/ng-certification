import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from './shared/team.service';
import {TeamData} from './shared/team-data.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Store} from '../store';
import {Game} from './shared/game.model';
import {GameData} from './shared/game-data.model';

@Component({
    selector: 'app-team-tracking', templateUrl: './team-tracking.component.html', styleUrls: ['./team-tracking.component.css']
})
export class TeamTrackingComponent implements OnInit, OnDestroy {

    subscriptions: Subscription = new Subscription();

    form: FormGroup = this.fb.group({
        teamId: ['', Validators.required]
    });

    teamIds$!: Observable<number[]>;
    teams$!: Observable<TeamData[]>;

    teamsMap: { [id: number]: TeamData } = {};

    constructor(private fb: FormBuilder, private store: Store, private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.teams$! = this.store.getTeams();
        this.subscriptions.add(this.store.getTeams().subscribe(teams => {
            // if (!Object.keys(this.teamsMap).length)
            teams.forEach(team => this.teamsMap[team.id] = team);
        }));
        this.subscriptions.add(this.teamService.getAllTeams().subscribe());
        this.teamIds$ = this.teamService.readTeamIds();
    }

    submit() {
        if (this.form.valid) {
            // console.log(this.form.value);
            this.teamService.addTeamId(this.form.value['teamId']);
        } else {
            alert('Please select a team');
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
