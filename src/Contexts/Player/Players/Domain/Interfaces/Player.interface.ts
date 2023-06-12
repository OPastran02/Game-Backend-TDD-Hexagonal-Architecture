import { Player } from '../Player';


export interface IPlayerRepository {
    
    addPlayer(player: Player): Promise<Player>;

    playerFindById(playerId: string): Promise<Player | null>; 

    playerDeactivate(playerId: string): Promise<void>;

    playerUpdateLastLogin(playerId: string, loginDays: number): Promise<void>; 

    playerUpdateAvatar(playerId: string, playerAvatar:string): Promise<void>; 

    playerUpdateAvatarBlock(playerId: string, playerAvatar:string): Promise<void>; 

    playerUpdateIds(playerId: string, facebookId:string | null, googleId:string | null, appleId:string | null): Promise<void>; 

    playerUpdateNames(playerId: string, nickname:string | null, lastname:string | null, appleId:string | null): Promise<void>;

    /*
    deletePlayer(playerId: PlayerId): Promise<void>; 
    updatePlayerEmail(playerId: PlayerId, newEmail: PlayerMail): Promise<void>;
*/
}
