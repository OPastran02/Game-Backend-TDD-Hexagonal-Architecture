import { IStatsRepository } from '../Domain/Interfaces/Stats.interfaces';
import { Stats } from '../Domain/Stats';

export class FindById {
  private repository: IStatsRepository;

  constructor(repository: IStatsRepository) {
    this.repository = repository;
  }

  public async findById(id: string): Promise<Stats | null> {
    return await this.repository.findById(id);
  }
}

