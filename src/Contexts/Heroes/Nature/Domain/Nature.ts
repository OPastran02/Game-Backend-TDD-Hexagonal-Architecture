import { Name } from './value-object/Name';
import { Description } from './value-object/Description';
import { Boost } from './value-object/Boost';

export class Nature {
  id:                 number;
  name:               string;
  description:        string;
  boost_attack:       number;  
  boost_defense:      number;  
  boost_hp:           number;  
  boost_sp_attack:    number;  
  boost_sp_defense:   number;  
  boost_speed:        number;  
  boost_farming:      number;  
  boost_steeling:     number;  
  boost_wooding:      number;   
  created_at:         Date; 

  constructor(
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
    _created_at: Date,
  ) {
    this.id = _id;
    this.name = new Name(_name).getValue();
    this.description = new Description(_description).getValue();
    this.boost_attack = new Boost(_boost_attack).getValue();
    this.boost_defense = new Boost(_boost_defense).getValue();
    this.boost_hp = new Boost(_boost_hp).getValue();
    this.boost_sp_attack = new Boost(_boost_sp_attack).getValue();
    this.boost_sp_defense = new Boost(_boost_sp_defense).getValue();
    this.boost_speed = new Boost(_boost_speed).getValue();
    this.boost_farming = new Boost(_boost_farming).getValue();
    this.boost_steeling = new Boost(_boost_steeling).getValue();
    this.boost_wooding = new Boost(_boost_wooding).getValue();
    this.created_at = _created_at;
  }
}