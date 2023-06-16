import { IHeroRepository } from '../Domain/interfaces/Hero.interface';
import { Hero } from '../Domain/Hero';

export class FindById {
  private repository: IHeroRepository;

  constructor(repository: IHeroRepository) {
    this.repository = repository;
  }

  public async findById(id: number): Promise<Hero | null> {
    return await this.repository.findById(id);
  }
}

