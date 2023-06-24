import { IHeroRepository } from '../Domain/interfaces/Hero.interface';
import { Hero } from '../Domain/Hero';

export class FindbyPlayer {
  private repository: IHeroRepository;

  constructor(repository: IHeroRepository) {
    this.repository = repository;
  }

  public async findbyPlayer(id: string): Promise<Hero[] | null> {
    return await this.repository.findbyPlayer(id);
  }
}

