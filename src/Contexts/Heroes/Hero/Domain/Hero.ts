import { Name } from './value-object/Name';
import { Description } from './value-object/Description';
import { Avatar } from './value-object/Avatar';
import { Nature } from '../../Nature/Domain/Nature';
import { Type } from '../../Type/Domain/Type';
import { Stats } from '../../Stats/Domain/Stats';
import { Rarity } from '../../Rarity/Domain/Rarity';
import { Race } from '../../Race/Domain/Race';

export class Hero {
  id:                 string;
  playerId:           string;
  idAvailableHero:    number;
  level:              number;
  Experience:         number;
  id_placement:       number;         
  name:               string;          
  description:        string | null ;
  avatar:             string | null ;
  created_at:         Date;
  nature:             Nature;  
  rarity:             Rarity;  
  type:               Type;  
  stats:              Stats; 
  race:               Race;  
  orderInGeneralTeam: number;
  orderInRaceTeam:    number;
  isInQueue:          boolean;

  constructor(
    _id:string,   
    _playerId:string,
    _idAvailableHero:number,
    _level:number,
    _Experience:number,
    _id_placement:number,        
    _name:string,          
    _description:string | null,
    _avatar:string | null,
    _created_at:Date,
    _nature:Nature,  
    _rarity:Rarity,  
    _type:Type,  
    _stats:Stats,
    _race:Race,
    _orderInGeneralTeam: number,
    _orderInRaceTeam: number,
    _isInQueue:boolean
  ) {
    this.id = _id;
    this.playerId = _playerId;
    this.idAvailableHero = _idAvailableHero;
    this.level = _level;
    this.Experience = _Experience;
    this.id_placement = _id_placement;
    this.name = new Name(_name).getValue();
    this.description = new Description(_description).getValue();
    this.avatar = new Avatar(_avatar).getValue();
    this.nature = _nature;
    this.rarity = _rarity;
    this.type = _type;
    this.stats = _stats;
    this.race = _race;
    this.orderInGeneralTeam = _orderInGeneralTeam;
    this.orderInRaceTeam = _orderInRaceTeam;
    this.isInQueue = _isInQueue;
    this.created_at = _created_at;
  }
}