import {TeamData} from './team-data.model';
import {TeamMeta} from './team-meta.model';

export interface Team {
    data: TeamData [],
    meta: TeamMeta
}
