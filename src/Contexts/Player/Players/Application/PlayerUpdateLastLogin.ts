import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
//import { Player } from '../Domain/Player';

export class PlayerUpdateLastLogin {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerUpdateLastLogin(playerId: string): Promise<void> {
    await this.playerRepository.playerUpdateLastLogin(playerId);
  }
}

