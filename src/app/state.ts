import {TeamData} from './team-tracking/shared/team-data.model';
import {GameData} from './team-tracking/shared/game-data.model';

export interface State {
    teamIds: number[],
    teams: TeamData[],
    games: {
        [teamId: number]: GameData[];
    };
}
