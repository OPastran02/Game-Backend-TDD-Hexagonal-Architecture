import { Player } from '../Player';
export interface IPlayerRepository {
    addPlayer(player: Player): Promise<Player>;
    playerFindById(playerId: string): Promise<Player | null>;
    playerDeactivate(playerId: string): Promise<void>;
    playerUpdateLastLogin(playerId: string): Promise<void>;
    playerUpdateAvatar(playerId: string, playerAvatar: string): Promise<void>;
    playerUpdateAvatarBlock(playerId: string, playerAvatar: string): Promise<void>;
}
