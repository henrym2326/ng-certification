import {GameData} from './game-data.model';
import {MetaData} from './meta-data.model';

export interface Game {
    data: GameData [],
    meta: MetaData
}
