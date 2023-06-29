import { IWorldRepository } from '../Domain/interfaces/World.interface';
import { World } from '../Domain/world';

export class FindByRace {
  private repository: IWorldRepository;

  constructor(repository: IWorldRepository) {
    this.repository = repository;
  }

  public async findByRace(id: number): Promise<World[]> {
    return await this.repository.findByRace(id);
  }
}

