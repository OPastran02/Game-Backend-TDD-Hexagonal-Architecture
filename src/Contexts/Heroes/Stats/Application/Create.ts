import { IRarityRepository } from '../Domain/interfaces/Rarity.interface';
import { Rarity } from '../Domain/Rarity';

export class Create {
  private rarityRepository: IRarityRepository;

  constructor(rarityRepository: IRarityRepository) {
    this.rarityRepository = rarityRepository;
  }

  public async create(    
    _id:number,
    _name: string,
    _description: string,
    _avatar: string,
    _created_at: Date
    ): Promise<Rarity> {
        const rarity: Rarity = new Rarity(
            _id,
            _name,
            _description,
            _avatar,
            _created_at
          );

    return await this.rarityRepository.create(rarity);
  }
  
}


 