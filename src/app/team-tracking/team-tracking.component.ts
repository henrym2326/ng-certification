import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TeamService} from './shared/team.service';
import {TeamData} from './shared/model/team-data.model';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Store} from '../store';
import {Game} from './shared/model/game.model';
import {GameData} from './shared/model/game-data.model';
import {NgFor} from '@angular/common';

@Component({
    selector: 'app-team-tracking', templateUrl: './team-tracking.component.html', styleUrls: ['./team-tracking.component.css']
})
export class TeamTrackingComponent implements OnInit, OnDestroy {

    subscriptions: Subscription = new Subscription();

    @ViewChild('formDirective') formDirective!: NgForm;

    form: FormGroup = this.fb.group({
        teamId: ['', Validators.required]
    });

    teamIds$!: Observable<number[]>;
    teams$!: Observable<TeamData[]>;

    teamsMap: { [id: number]: TeamData } = {};

    constructor(private fb: FormBuilder, private store: Store, private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.teamIds$ = this.teamService.readTeamIds();
        this.teams$! = this.store.getTeams();
        this.subscriptions.add(this.teamService.getAllTeams().subscribe());
        this.subscriptions.add(this.store.getTeams().subscribe(teams => teams.forEach(team => this.teamsMap[team.id] = team)));
    }

    submit() {
        if (this.form.valid) {
            this.teamService.addTeamId(this.form.value['teamId']);
            this.form.get('teamId')?.patchValue('');
            this.formDirective.resetForm();
        } else {
            alert('Please select a team');
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
