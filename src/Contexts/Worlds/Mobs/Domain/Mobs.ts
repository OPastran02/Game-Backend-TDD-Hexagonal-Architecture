export class Mobs {
  id           :number;
  waveId       :number; 
  order        :number; 
  name         :string; 
  attack       :number; 
  defense      :number; 
  hp           :number; 
  sp_attack    :number; 
  sp_defense   :number; 
  speed        :number; 

  constructor(
    _id           :number,
    _waveId       :number,
    _order        :number,
    _name         :string,
    _attack       :number,
    _defense      :number,
    _hp           :number,
    _sp_attack    :number,
    _sp_defense   :number,
    _speed        :number
  ) {
    this.id = _id;
    this.id          =   _id         ;
    this.waveId      =   _waveId     ;  
    this.order       =   _order      ;  
    this.name        =   _name       ;  
    this.attack      =   _attack     ;  
    this.defense     =   _defense    ;  
    this.hp          =   _hp         ;  
    this.sp_attack   =   _sp_attack  ;  
    this.sp_defense  =   _sp_defense ;  
    this.speed       =   _speed      ;  
  }
}