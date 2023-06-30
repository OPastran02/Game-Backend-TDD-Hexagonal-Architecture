import { IPlayerWorldRepository } from '../Domain/interfaces/PlayerWorld.interface';
import { PlayerWorld } from '../Domain/PlayerWorld';

export class FindByPlayerWorld {
  private repository: IPlayerWorldRepository;

  constructor(repository: IPlayerWorldRepository) {
    this.repository = repository;
  }

  public async findByPlayerWorld(_idPlayer: string, _idWorld: number): Promise<PlayerWorld> {
    return await this.repository.findByPlayerWorld(_idPlayer,_idWorld);
  }
}

