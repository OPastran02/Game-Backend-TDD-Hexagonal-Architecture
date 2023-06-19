import { IHeroRepository } from '../Domain/interfaces/Hero.interface';

export class IsThereAnyHeroInQueue {
  private repository: IHeroRepository;

  constructor(repository: IHeroRepository) {
    this.repository = repository;
  }

  public async IsThereAnyHeroInQueue(id: string, queue : boolean): Promise<number> {
    return await this.repository.IsThereAnyHeroInQueue(id, queue);
  }
}

