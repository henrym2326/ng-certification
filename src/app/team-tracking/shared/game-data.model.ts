import {TeamData} from './team-data.model';

export interface GameData {
    date: Date,
    home_team: TeamData,
    home_team_score: number,
    id: number,
    period: number,
    postseason: boolean,
    season: number,
    status: string;
    time: string;
    visitor_team: TeamData,
    visitor_team_score: number,
    team_id?: number;
}
