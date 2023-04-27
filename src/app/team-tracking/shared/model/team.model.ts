import {TeamData} from './team-data.model';
import {MetaData} from './meta-data.model';

export interface Team {
    data: TeamData [],
    meta: MetaData
}
