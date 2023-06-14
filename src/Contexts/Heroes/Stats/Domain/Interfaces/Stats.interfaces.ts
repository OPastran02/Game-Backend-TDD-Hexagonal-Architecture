import { Stats } from '../Stats';

export interface IStatsRepository {  

    create(type: Stats): Promise<Stats>;

    findById(Id: number): Promise<Stats | null>;

}
