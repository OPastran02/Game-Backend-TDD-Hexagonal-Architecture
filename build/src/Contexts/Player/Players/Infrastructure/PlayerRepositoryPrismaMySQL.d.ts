import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
export declare class PlayerRepositoryPrismaMySQL implements IPlayerRepository {
    addPlayer(player: Player): Promise<Player>;
    playerFindById(playerId: string): Promise<Player>;
    playerDeactivate(playerId: string): Promise<void>;
    playerUpdateLastLogin(playerId: string): Promise<void>;
}
