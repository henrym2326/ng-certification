import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from './shared/team.service';
import {TeamData} from './shared/team-data.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'app-team-tracking', templateUrl: './team-tracking.component.html', styleUrls: ['./team-tracking.component.css']
})
export class TeamTrackingComponent implements OnInit, OnDestroy {

    subscriptions: Subscription = new Subscription();

    form: FormGroup = this.fb.group({
        teamId: ['', Validators.required]
    });

    teams: TeamData[] = [];

    teamsMap: {
        [id: number]: TeamData;
    } = {};

    teamIds$!: Observable<number[]>;

    constructor(private fb: FormBuilder, private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.subscriptions.add(this.teamService.getAllTeams().subscribe(teams => {
            console.log(teams);
            this.teams = teams;
            teams.forEach(team => this.teamsMap[team.id] = team);
        }));

        this.teamIds$ = this.teamService.readTeamIds();
    }

    submit() {
        if (this.form.valid) {
            console.log(this.form.value);
            this.teamService.addTeamId(this.form.value['teamId']);
        } else {
            console.log('error');
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

}
