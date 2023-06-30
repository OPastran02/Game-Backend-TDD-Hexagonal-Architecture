import { PlayerWorld } from '../PlayerWorld';

export interface IPlayerWorldRepository {  
    findByPlayerWorld(player: string, world: number): Promise<PlayerWorld>;

    findByPlayer(player: string): Promise<PlayerWorld[]>;
}
