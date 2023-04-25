import {Component, OnInit} from '@angular/core';
import {TeamService} from './shared/team.service';
import {TeamData} from './shared/team-data.model';

@Component({
    selector: 'app-team-tracking', templateUrl: './team-tracking.component.html', styleUrls: ['./team-tracking.component.css']
})
export class TeamTrackingComponent implements OnInit {

    teams!: TeamData[];

    constructor(private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.teamService.getAllTeams().subscribe(teams => {
            console.log(teams);
            this.teams = teams;
        });
    }

}
