import { IAvailableHeroesRepository } from '../Domain/interfaces/AvailableHeroes.inteface';
import { AvailableHeroes } from '../Domain/AvailableHeroes';

export class AvailableHeroFindById {
  private availableHeroesRepository: IAvailableHeroesRepository;

  constructor(availableHeroesRepository: IAvailableHeroesRepository) {
    this.availableHeroesRepository = availableHeroesRepository;
  }

  public async availableHeroFindById(id: number): Promise<AvailableHeroes> {
    return await this.availableHeroesRepository.availableHeroFindById(id);
  }
}

