import {TeamData} from './team-tracking/shared/model/team-data.model';
import {GameData} from './team-tracking/shared/model/game-data.model';

export interface State {
    teamIds: number[],
    teams: TeamData[],
    games: {
        [teamId: number]: GameData[];
    };
}
