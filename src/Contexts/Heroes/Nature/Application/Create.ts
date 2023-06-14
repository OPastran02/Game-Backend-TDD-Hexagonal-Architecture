import { INatureRepository } from '../Domain/interfaces/Nature.interface';
import { Nature } from '../Domain/Nature';

export class Create {
  private repository: INatureRepository;

  constructor(repository: INatureRepository) {
    this.repository = repository;
  }

  public async create(    
      _id: number,
      _name: string,
      _description: string,
      _boost_attack: number,
      _boost_defense: number,
      _boost_hp: number,
      _boost_sp_attack: number,
      _boost_sp_defense: number,
      _boost_speed: number,
      _boost_farming: number,
      _boost_steeling: number,
      _boost_wooding: number,
      _created_at: Date
    ): Promise<Nature> {
        const nature: Nature = new Nature(
          _id,
          _name,
          _description,
          _boost_attack,
          _boost_defense,
          _boost_hp,
          _boost_sp_attack,
          _boost_sp_defense,
          _boost_speed,
          _boost_farming,
          _boost_steeling,
          _boost_wooding,
          _created_at
          );

    return await this.repository.create(nature);
  }
  
}


 