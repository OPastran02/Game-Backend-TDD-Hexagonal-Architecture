import { IRewardRepository } from '../Domain/interfaces/Reward.interface';
import { Reward } from '../Domain/Reward';

export class FindByMundo {
  private repository: IRewardRepository;

  constructor(repository: IRewardRepository) {
    this.repository = repository;
  }

  public async findByMundo(id: number): Promise<Reward> {
    return await this.repository.findByMundo(id);
  }
}

