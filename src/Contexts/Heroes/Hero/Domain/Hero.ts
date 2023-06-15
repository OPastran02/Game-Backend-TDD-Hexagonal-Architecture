import { Name } from './value-object/Name';
import { Description } from './value-object/Description';
import { Avatar } from './value-object/Avatar';
import { Nature } from '../../Nature/Domain/Nature';
import { Type } from '../../Type/Domain/Type';
import { Stats } from '../../Stats/Domain/Stats';
import { Rarity } from '../../Rarity/Domain/Rarity';

export class Hero {
  id:             string;
  playerId:       string;
  level:          number;
  Experience:     number;
  id_placement:   number;         
  name:           string;          
  description:    string;
  world:          string;
  avatar:         string;
  created_at:     Date;
  nature:         Nature;  
  rarity:         Rarity;  
  type:           Type;  
  stats:          Stats;  

  constructor(
    _id:string,   
    _playerId:string,
    _level:number,
    _Experience:number,
    _id_placement:number,        
    _name:string,          
    _description:string,
    _world:string,
    _avatar:string,
    _created_at:Date,
    _nature:Nature,  
    _rarity:Rarity,  
    _type:Type,  
    _stats:Stats  
  ) {
    this.id = _id;
    this.playerId = _playerId;
    this.level = _level;
    this.Experience = _Experience;
    this.id_placement = _id_placement;
    this.name = new Name(_name).getValue();
    this.description = new Description(_description).getValue();
    this.world = new Description(_world).getValue();
    this.avatar = new Avatar(_avatar).getValue();
    this.nature = _nature;
    this.rarity = _rarity;
    this.type = _type;
    this.stats = _stats;
    this.created_at = _created_at;
  }
}