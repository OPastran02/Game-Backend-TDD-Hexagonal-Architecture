import { IPlayerWorldRepository } from '../Domain/interfaces/PlayerWorld.interface';
import { PlayerWorld } from '../Domain/PlayerWorld';

export class FindByPlayer {
  private repository: IPlayerWorldRepository;

  constructor(repository: IPlayerWorldRepository) {
    this.repository = repository;
  }

  public async findByPlayer(_idPlayer: string): Promise<PlayerWorld[]> {
    return await this.repository.findByPlayer(_idPlayer);
  }
}

