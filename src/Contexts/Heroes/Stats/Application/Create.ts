import { IStatsRepository } from '../Domain/Interfaces/Stats.interfaces';
import { Stats } from '../Domain/Stats';

export class Create {
  private repository: IStatsRepository;

  constructor(repository: IStatsRepository) {
    this.repository = repository;
  }

  public async create(    
      _id:            number,    
      _heroId:        string,
      _attack:        number,    
      _defense:       number,    
      _hp:            number,    
      _sp_attack:     number,    
      _sp_defense:    number,    
      _speed:         number,    
      _farming:       number,    
      _steeling:      number,    
      _wooding:       number,    
      _attackBst:     number,    
      _defenseBst:    number,    
      _hpBst:         number,    
      _sp_attackBst:  number,    
      _sp_defenseBst: number,    
      _speedBst:      number,    
      _farmingBst:    number,    
      _steelingBst:   number,    
      _woodingBst:    number,    
      _created_at:    Date, 
      _power_points:  number    
    ): Promise<Stats> {
        const stats: Stats = new Stats(
          _id,
          _heroId,
          _attack,
          _defense,
          _hp,
          _sp_attack,
          _sp_defense,
          _speed,
          _farming,
          _steeling,
          _wooding,
          _attackBst,
          _defenseBst,
          _hpBst,
          _sp_attackBst,
          _sp_defenseBst,
          _speedBst,
          _farmingBst,
          _steelingBst,
          _woodingBst,
          _created_at,
          _power_points
          );

    return await this.repository.create(stats);
  }
  
}


 