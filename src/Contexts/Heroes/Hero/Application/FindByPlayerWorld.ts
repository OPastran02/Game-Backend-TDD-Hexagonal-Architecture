import { IHeroRepository } from '../Domain/interfaces/Hero.interface';
import { Hero } from '../Domain/Hero';

export class FindByPlayerWorld {
  private repository: IHeroRepository;

  constructor(repository: IHeroRepository) {
    this.repository = repository;
  }

  public async findByPlayerWorld(id: string, world: number): Promise<Hero[] | null> {
    return await this.repository.findByPlayerWorld(id,world);
  }
}

