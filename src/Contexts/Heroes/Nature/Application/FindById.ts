import { INatureRepository } from '../Domain/interfaces/Nature.interface';
import { Nature } from '../Domain/Nature';

export class FindById {
  private repository: INatureRepository;

  constructor(repository: INatureRepository) {
    this.repository = repository;
  }

  public async findById(id: number): Promise<Nature | null> {
    return await this.repository.findById(id);
  }
}

