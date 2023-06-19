import { IRaceRepository } from '../Domain/interfaces/Race.interface';
import { Race } from '../Domain/Race';

export class FindById {
  private repository: IRaceRepository;

  constructor(repository: IRaceRepository) {
    this.repository = repository;
  }

  public async findById(id: number): Promise<Race> {
    return await this.repository.findById(id);
  }
}

