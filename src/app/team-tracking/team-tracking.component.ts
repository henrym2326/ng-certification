import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TeamService} from './shared/team.service';
import {TeamData} from './shared/model/team-data.model';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Store} from '../store';

@Component({
    selector: 'app-team-tracking',
    templateUrl: './team-tracking.component.html',
    styleUrls: ['./team-tracking.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamTrackingComponent implements OnInit, OnDestroy {

    subscriptions: Subscription = new Subscription();

    @ViewChild('formDirective') formDirective!: NgForm;

    form: FormGroup = this.fb.group({
        teamId: ['', Validators.required]
    });

    teamIds$!: Observable<number[]>;
    teams$!: Observable<TeamData[]>;

    constructor(private fb: FormBuilder, private store: Store, private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.teamIds$ = this.teamService.readTeamIds();
        this.teams$ = this.store.getTeams();
        this.subscriptions.add(this.teamService.getAllTeams().subscribe());
    }

    submit(): void {
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
