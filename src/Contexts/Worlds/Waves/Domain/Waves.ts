import { Mobs } from "../../Mobs/Domain/Mobs";

export class Waves {
  id             : number;
  mundoId        : number; 
  wave           : number; 
  mobs           : Mobs[];

  constructor(
    _id             : number,
    _mundoId        : number, 
    _wave           : number,
    _mobs           : Mobs[]
  ) {
    this.id          = _id;
    this.mundoId     = _mundoId;  
    this.wave        = _wave;  
    this.mobs        = _mobs;  
  }
}
