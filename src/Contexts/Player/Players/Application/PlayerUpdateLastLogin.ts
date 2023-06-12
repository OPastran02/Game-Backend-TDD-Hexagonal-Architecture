import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { differenceInDays } from 'date-fns';

export class PlayerUpdateLastLogin {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerUpdateLastLogin(playerId: string): Promise<void> {
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    let updatedLoginDays=1
    if (player) {
      const difference = differenceInDays( new Date(), player.lastLogin);
      if (difference === 1){
        updatedLoginDays = (player.loginDays || 0) + 1;
      }else if (difference > 1) {
        updatedLoginDays = 1; 
      }else{
        updatedLoginDays =  player.loginDays
      }
    }  
    
    await this.playerRepository.playerUpdateLastLogin(playerId,updatedLoginDays);
  }
}

