import { IAvailableHeroesRepository } from '../Domain/interfaces/AvailableHeroes.inteface';
import { AvailableHeroes } from '../Domain/AvailableHeroes';

export class AvailableHeroFindByRarity {
  private availableHeroesRepository: IAvailableHeroesRepository;

  constructor(availableHeroesRepository: IAvailableHeroesRepository) {
    this.availableHeroesRepository = availableHeroesRepository;
  }

  public async availableHeroFindByRarity(id: number): Promise<AvailableHeroes[]> {
    return await this.availableHeroesRepository.availableHeroFindByRarity(id);
  }
}
