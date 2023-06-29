export class Waves {
  id             :number;
  mundoId        :number; 
  wave           :number; 


  constructor(
    _id             :number,
    _mundoId        :number, 
    _wave          :number, 
  ) {
    this.id          =   _id        ;
    this.mundoId     =   _mundoId   ;  
    this.wave        =   _wave      ;  
  }
}