import { IWorldRepository } from '../Domain/interfaces/World.interface';
import { World } from '../Domain/world';

export class FindById {
  private repository: IWorldRepository;

  constructor(repository: IWorldRepository) {
    this.repository = repository;
  }

  public async findById(id: number): Promise<World> {
    return await this.repository.findById(id);
  }
}

