import { Player } from "../../../Player/Players/Domain/Player";

export class PlayerWorld {
  id               : number;                
  player           : Player;           
  idWorld          : number;
  stars            : number;    
  MundoAvatar      : string;


  constructor(
    _id               : number,                
    _player           : Player,           
    _idworld          : number, 
    _stars            : number,             
    _MundoAvatar      : string
  ) {
    this.id          =   _id         ;
    this.player      =   _player     ;           
    this.idWorld     =   _idworld    ;   
    this.stars       =   _stars      ;            
    this.MundoAvatar =   _MundoAvatar;
  }
}