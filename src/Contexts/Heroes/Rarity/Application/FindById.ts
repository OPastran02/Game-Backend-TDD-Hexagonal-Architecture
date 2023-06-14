import { IRarityRepository } from '../Domain/interfaces/Rarity.interface';
import { Rarity } from '../Domain/Rarity';

export class FindById {
  private rarityRepository: IRarityRepository;

  constructor(rarityRepository: IRarityRepository) {
    this.rarityRepository = rarityRepository;
  }

  public async findById(id: number): Promise<Rarity | null> {
    return await this.rarityRepository.findById(id);
  }
}

