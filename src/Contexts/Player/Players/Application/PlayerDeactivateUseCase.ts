import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
//import { Player } from '../Domain/Player';

export class PlayerDeactivateUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerDeactivate(playerId: string): Promise<void> {
    await this.playerRepository.playerDeactivate(playerId);
  }
}

