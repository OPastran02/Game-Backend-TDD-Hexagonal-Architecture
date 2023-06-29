import { Player } from "../../../../Player/Players/Domain/Player";
import { PlayerWorld } from '../PlayerWorld';

export interface IPlayerWorldRepository {  
    findByPlayerWorld(player: Player, world: number): Promise<PlayerWorld>;
}
