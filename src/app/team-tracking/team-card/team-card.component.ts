import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TeamService} from '../shared/team.service';
import {Game} from '../shared/game.model';
import {TeamData} from '../shared/team-data.model';

@Component({
    selector: 'app-team-card', templateUrl: './team-card.component.html', styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit, OnDestroy {

    subscriptions: Subscription = new Subscription();

    @Input() team!: TeamData;

    gameResults!: Game;

    constructor(private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.subscriptions.add(this.teamService.getGameResults(this.team.id).subscribe(gameResults => this.gameResults = gameResults));
    }

    remove() {
        this.teamService.deleteTeamId(this.team.id);
    }

    // get icon() {
    //
    // }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
