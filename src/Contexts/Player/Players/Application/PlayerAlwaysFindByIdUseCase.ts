import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';

export class PlayerAlwaysFindByIdUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerAlwaysFindById(id: string): Promise<Player> {
    return await this.playerRepository.playerAlwaysFindById(id);
  }
}

