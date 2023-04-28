import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {find, map, Observable, Subscription, switchMap} from 'rxjs';
import {TeamService} from '../shared/team.service';
import {TeamData} from '../shared/model/team-data.model';
import {GameData} from '../shared/model/game-data.model';
import {Store} from '../../store';

@Component({
    selector: 'app-team-card',
    templateUrl: './team-card.component.html',
    styleUrls: ['./team-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamCardComponent implements OnInit, OnDestroy {

    subscriptions: Subscription = new Subscription();

    @Input() teamId!: number;

    team$!: Observable<TeamData | undefined>;
    games$!: Observable<GameData[]>;

    avgPointsScored!: number;
    avgPointsConceded!: number;

    constructor(private store: Store, private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.team$ = this.store.getTeams().pipe(switchMap(teams => teams), find(team => team.id == this.teamId));
        this.games$ = this.store.getGames().pipe(map(games => games[this.teamId]));
        this.subscriptions.add(this.games$.subscribe(games => this.calAvgPoints(games)));
        this.subscriptions.add(this.teamService.getGames(this.teamId).subscribe());
    }

    remove(): void {
        this.teamService.deleteTeamId(this.teamId);
    }

    getIcon(team: TeamData): string {
        return `https://interstate21.com/nba-logos/${team.abbreviation}.png`;
    }

    getScoreDiff(game: GameData): number {
        if (this.isHomeTeam(game)) {
            return game.home_team_score - game.visitor_team_score;
        } else {
            return game.visitor_team_score - game.home_team_score;
        }
    }

    getGameResult(game: GameData): string {
        if (this.getScoreDiff(game) > 0) return 'W';
        if (this.getScoreDiff(game) < 0) return 'L';
        return 'D';
    }

    calAvgPoints(games: GameData[]): void {
        let pointsScored: number = 0;
        let pointsConceded: number = 0;

        if (games) {
            games.forEach((game, i) => {
                if (this.isHomeTeam(game)) {
                    pointsScored = pointsScored + game.home_team_score;
                    pointsConceded = pointsConceded + game.visitor_team_score;
                } else {
                    pointsScored = pointsScored + game.visitor_team_score;
                    pointsConceded = pointsConceded + game.home_team_score;
                }
            });
            this.avgPointsScored = pointsScored / games.length;
            this.avgPointsConceded = pointsConceded / games.length;
        }
    }

    isHomeTeam(game: GameData): boolean {
        return this.teamId == game.home_team.id;
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
