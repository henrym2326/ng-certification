import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {map, Observable, Subscription} from 'rxjs';
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

    team!: TeamData;
    team$!: Observable<TeamData>;
    games$!: Observable<GameData[]>;

    avgPointsScored!: number;
    avgPointsConceded!: number;

    constructor(private store: Store, private teamService: TeamService, private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.subscriptions.add(this.store.getTeams().subscribe(teams => {
            const team: TeamData | undefined = teams.find(team => team.id == this.teamId);
            if (team != undefined) {
                this.team = {...team};
                this.games$ = this.store.getGames().pipe(map(games => games[this.teamId]));
                this.subscriptions.add(this.store.getGames().pipe(map(games => games[this.teamId])).subscribe(games => this.calAvgPoints(games)));
                this.changeDetector.detectChanges();
            }
        }));
        this.subscriptions.add(this.teamService.getGames(this.teamId).subscribe());
    }

    remove(): void {
        this.teamService.deleteTeamId(this.teamId);
    }

    get icon(): string {
        return `https://interstate21.com/nba-logos/${this.team.abbreviation}.png`;
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
