import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';

export class PlayerFindById {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async findPlayerById(id: number): Promise<Player | null> {
    return await this.playerRepository.findPlayerById(id);
  }
}

