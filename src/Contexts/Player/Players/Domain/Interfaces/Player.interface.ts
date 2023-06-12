import { Player } from '../Player';


export interface IPlayerRepository {
    
    addPlayer(player: Player): Promise<Player>; //Agrega un player completo

    playerFindById(playerId: string): Promise<Player | null>; //busca un player por Id

    playerDeactivate(playerId: string): Promise<void>; //desactivo jugador

    playerUpdateLastLogin(playerId: string): Promise<void>; //update lastlogin

    playerUpdateAvatar(playerId: string, playerAvatar:string): Promise<void>; //update lastlogin

    playerUpdateAvatarBlock(playerId: string, playerAvatar:string): Promise<void>; //update lastlogin

/*
    deletePlayer(playerId: PlayerId): Promise<void>; 
    updatePlayerEmail(playerId: PlayerId, newEmail: PlayerMail): Promise<void>;
*/
}