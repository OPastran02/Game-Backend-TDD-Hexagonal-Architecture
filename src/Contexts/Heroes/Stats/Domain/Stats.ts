import { Stat } from './value-object/Stat';

export class Stats {
    id:            number;      
    heroId:        string;
    attack:        number;  
    defense:       number;  
    hp:            number;  
    sp_attack:     number;  
    sp_defense:    number;  
    speed:         number;  
    farming:       number;  
    steeling:      number;  
    wooding:       number;  
    attackBst:     number;  
    defenseBst:    number;  
    hpBst:         number;  
    sp_attackBst:  number;  
    sp_defenseBst: number;  
    speedBst:      number;  
    farmingBst:    number;  
    steelingBst:   number;  
    woodingBst:    number;  
    created_at:    Date; 
    power_points:  number;     
  constructor(
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
    _power_points:  number,    
  ) {
    this.id = _id;
    this.heroId = _heroId;
    this.attack        = new Stat(_attack).getValue();  
    this.defense       = new Stat(_defense).getValue();  
    this.hp            = new Stat(_hp).getValue();  
    this.sp_attack     = new Stat(_sp_attack).getValue();  
    this.sp_defense    = new Stat(_sp_defense).getValue();  
    this.speed         = new Stat(_speed).getValue();  
    this.farming       = new Stat(_farming).getValue();  
    this.steeling      = new Stat(_steeling).getValue();  
    this.wooding       = new Stat(_wooding).getValue();  
    this.attackBst     = new Stat(_attackBst).getValue();  
    this.defenseBst    = new Stat(_defenseBst).getValue();  
    this.hpBst         = new Stat(_hpBst).getValue();  
    this.sp_attackBst  = new Stat(_sp_attackBst).getValue();  
    this.sp_defenseBst = new Stat(_sp_defenseBst).getValue();  
    this.speedBst      = new Stat(_speedBst).getValue();  
    this.farmingBst    = new Stat(_farmingBst).getValue();  
    this.steelingBst   = new Stat(_steelingBst).getValue();  
    this.woodingBst    = new Stat(_woodingBst).getValue();  
    this.created_at = _created_at;
    this.power_points = _power_points;
  }
}