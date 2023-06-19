import { IHeroRepository } from '../Domain/interfaces/Hero.interface';
import { Hero } from '../Domain/Hero';

export class FindByRace {
  private repository: IHeroRepository;

  constructor(repository: IHeroRepository) {
    this.repository = repository;
  }

  public async findByRace(race: number, id: string): Promise<Hero[] | null> {
    return await this.repository.findByRace(race, id);
  }
}

