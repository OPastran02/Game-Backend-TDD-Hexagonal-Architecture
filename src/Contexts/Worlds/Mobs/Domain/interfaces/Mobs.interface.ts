import { Mobs } from '../Mobs';

export interface IMobsRepository {  

    findByWave(wave: number): Promise<Mobs>;

}
