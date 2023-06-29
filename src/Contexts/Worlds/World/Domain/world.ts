export class World {
  id               : number;
  race             : number;   
  chapter          : number;
  MundoAvatar      : string;
constructor(
    _id               : number,
    _race             : number,
    _chapter          : number,
    _MundoAvatar      : string,
  ) {
    this.id          =   _id          ;
    this.race         =  _race        ;   
    this.chapter      =  _chapter     ;   
    this.MundoAvatar  =  _MundoAvatar ;    
  }
}