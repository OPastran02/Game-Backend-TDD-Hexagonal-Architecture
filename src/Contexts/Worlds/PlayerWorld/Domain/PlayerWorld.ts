
export class PlayerWorld {
  id               : number;                
  idPlayer         : string;           
  idWorld          : number;
  stars            : number;    
  MundoAvatar      : string;


  constructor(
    _id               : number,                
    _idplayer         : string,           
    _idworld          : number, 
    _stars            : number,             
    _MundoAvatar      : string
  ) {
    this.id          =   _id         ;
    this.idPlayer    =   _idplayer   ;           
    this.idWorld     =   _idworld    ;   
    this.stars       =   _stars      ;            
    this.MundoAvatar =   _MundoAvatar;
  }
}