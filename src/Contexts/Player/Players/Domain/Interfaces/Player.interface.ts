import { Player } from '../Player';


export interface IPlayerRepository {
    
    addPlayer(player: Player): Promise<Player>;

    playerFindById(playerId: string): Promise<Player | null>; 

    playerDeactivate(playerId: string): Promise<void>;

    playerUpdateLastLogin(playerId: string, loginDays: number): Promise<void>; 

    playerUpdateAvatar(playerId: string, playerAvatar:string): Promise<void>; 

    playerUpdateAvatarBlock(playerId: string, playerAvatarBlock:string): Promise<void>; 

    playerUpdateIds(playerId: string, facebookId:string | null, googleId:string | null, appleId:string | null): Promise<void>; 

    playerUpdateNames(playerId: string, nickname:string | null, lastname:string | null, appleId:string | null): Promise<void>;

    playerUpdateMail(playerId: string, playerMail:string): Promise<void>; 

    playerAddCoins(playerId: string, coins:number): Promise<void>; 

    playerAddDiamons(playerId: string, diamonds:number): Promise<void>; 

    playerAddExperience(playerId: string, experience:number): Promise<void>;

    playerAddPhrase(playerId: string, phrase:string): Promise<void>;

    playerAddBattlePass(playerId: string): Promise<void>;

    playerAddYearPass(playerId: string): Promise<void>;

}
