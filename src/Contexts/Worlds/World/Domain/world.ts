import { Reward } from "../../Reward/Domain/Reward";
import { Waves } from "../../Waves/Domain/Waves";

export class World {
  id               : number       ;
  race             : number       ;   
  chapter          : number       ;
  MundoAvatar      : string       ;
  rewards          : Reward[]     ; // Cambiado de "reward" a "rewards"
  waves            : Waves[]      ;
  constructor(
    _id               : number,
    _race             : number,
    _chapter          : number,
    _MundoAvatar      : string,
    _rewards          : Reward[],   // Cambiado de "_reward" a "_rewards"
    _waves            : Waves[]
  ) {
    this.id           =   _id         ;
    this.race         =  _race        ;   
    this.chapter      =  _chapter     ;   
    this.MundoAvatar  =  _MundoAvatar ;   
    this.rewards      =  _rewards     ; // Cambiado de "reward" a "rewards"
    this.waves        =  _waves       ;  
  }
}
