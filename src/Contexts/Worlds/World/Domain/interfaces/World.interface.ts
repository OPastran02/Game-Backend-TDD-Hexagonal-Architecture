import { World } from '../world';

export interface IWorldRepository {  
    findById(id: number): Promise<World>;

    findByRace(race: number): Promise<World[]>;

    findAllWorlds(): Promise<World[]>;
}
