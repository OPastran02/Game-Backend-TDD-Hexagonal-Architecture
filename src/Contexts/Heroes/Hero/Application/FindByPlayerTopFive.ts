import { IHeroRepository } from '../Domain/interfaces/Hero.interface';
import { Hero } from '../Domain/Hero';

export class FindByPlayerTopFive {
  private repository: IHeroRepository;

  constructor(repository: IHeroRepository) {
    this.repository = repository;
  }

  public async findByPlayerTopFive(id: string): Promise<Hero[] | null> {
    return await this.repository.findByPlayerTopFive(id);
  }
}

