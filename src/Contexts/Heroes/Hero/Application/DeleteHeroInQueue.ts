import { IHeroRepository } from '../Domain/interfaces/Hero.interface';

export class DeleteHeroInQueue {
  private repository: IHeroRepository;

  constructor(repository: IHeroRepository) {
    this.repository = repository;
  }

  public async deleteHeroInQueue(id: string): Promise<void> {
    return await this.repository.deleteHeroInQueue(id);
  }
}

