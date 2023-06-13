import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
export declare class PlayerRepositoryPrismaMySQL implements IPlayerRepository {
    addPlayer(player: Player): Promise<Player>;
    playerFindById(playerId: string): Promise<Player>;
    playerDeactivate(playerId: string): Promise<void>;
    playerUpdateLastLogin(playerId: string, _loginDays: number): Promise<void>;
    playerUpdateAvatar(playerId: string, _avatar: string): Promise<void>;
    playerUpdateAvatarBlock(playerId: string, _avatarBlock: string): Promise<void>;
    playerUpdateIds(playerId: string, _googleId: string, _facebookId: string, _appleId: string): Promise<void>;
    playerUpdateNames(playerId: string, _googleId: string, _facebookId: string, _appleId: string): Promise<void>;
    playerUpdateMail(playerId: string, _mail: string): Promise<void>;
    playerAddCoins(playerId: string, _coins: number): Promise<void>;
    playerAddDiamons(playerId: string, _diamonds: number): Promise<void>;
    playerAddExperience(playerId: string, _experience: number): Promise<void>;
    playerAddPhrase(playerId: string, _phrase: string): Promise<void>;
    playerAddBattlePass(playerId: string): Promise<void>;
    playerAddYearPass(playerId: string): Promise<void>;
}
