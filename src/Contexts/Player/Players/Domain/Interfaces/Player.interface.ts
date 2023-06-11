import { Player } from '../Player';


export interface IPlayerRepository {
    
    addPlayer(player: Player): Promise<Player>; //Agrega un player completo

    findPlayerById(playerId: string): Promise<Player | null>; //busca un player por Id

/*
    deletePlayer(playerId: PlayerId): Promise<void>; 
    updatePlayerEmail(playerId: PlayerId, newEmail: PlayerMail): Promise<void>;
*/
}