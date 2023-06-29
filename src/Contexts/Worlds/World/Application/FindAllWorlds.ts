import { IWorldRepository } from '../Domain/interfaces/World.interface';
import { World } from '../Domain/world';

export class FindAllWorlds {
  private repository: IWorldRepository;

  constructor(repository: IWorldRepository) {
    this.repository = repository;
  }

  public async findAllWorlds(): Promise<World[]> {
    return await this.repository.findAllWorlds();
  }
}

