import { Name } from './value-object/Name';
import { Description } from './value-object/Description';

export class Box {
  id:               number;
  name:             string;
  description:      string;
  race:             number;
  booster:          string;
  modifier:         number;

  constructor(
    _id:               number,
    _name:             string,
    _description:      string,
    _race:             number,
    _booster:          string,
    _modifier:         number
  ) {
    this.id = _id;
    this.name = new Name(_name).getValue();  
    this.description = new Description(_description).getValue();
    this.race        =   _race     ;
    this.booster     =   _booster  ;
    this.modifier    =   _modifier ;
  }
}