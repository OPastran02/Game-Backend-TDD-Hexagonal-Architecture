export class Reward {
  id             :number;
  mundoId        :number; 
  item           :number; 
  quantity       :number; 


  constructor(
    _id             :number,
    _mundoId        :number, 
    _item           :number, 
    _quantity       :number 
  ) {
    this.id          =   _id        ;
    this.mundoId     =   _mundoId   ;  
    this.item        =   _item      ;  
    this.quantity    =   _quantity  ;  
  }
}