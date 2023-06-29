import { IMobsRepository } from '../Domain/interfaces/Mobs.interface';
import { Mobs } from '../Domain/Mobs';

export class FindByWave {
  private repository: IMobsRepository;

  constructor(repository: IMobsRepository) {
    this.repository = repository;
  }

  public async findByWave(id: number): Promise<Mobs> {
    return await this.repository.findByWave(id);
  }
}

