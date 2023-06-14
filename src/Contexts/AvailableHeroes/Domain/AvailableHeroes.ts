
import { v4 as uuidv4 } from 'uuid';

export class AvailableHeroes {
  id               : string;
  name             : string;
  description      : string;
  world            : string;
  avatar           : string;
  avatarBlock      : string;
  rarityId         : number;
  natureId         : number;
  typeId           : number;
  attackMin        : number;
  attackMax        : number;
  attackBstMin     : number;
  attackBstMax     : number;
  defenseMin       : number;
  defenseMax       : number;
  defenseBstMin    : number;
  defenseBstMax    : number;
  hpMin            : number;
  hpMax            : number;
  hpBstMin         : number;
  hpBstMax         : number;
  sp_attackMin     : number;
  sp_attackMax     : number;
  sp_attackBstMin  : number;
  sp_attackBstMax  : number;
  sp_defenseMin    : number;
  sp_defenseMax    : number;
  sp_defenseBstMin : number;
  sp_defenseBstMax : number;
  speedMin         : number;
  speedMax         : number;
  speedBstMin      : number;
  speedBstMax      : number;
  farmingMin       : number;
  farmingMax       : number;
  farmingBstMin    : number;
  farmingBstMax    : number;
  steelingMin      : number;
  steelingMax      : number;
  steelingBstMin   : number;
  steelingBstMax   : number;
  woodingMin       : number;
  woodingMax       : number;
  woodingBstMin    : number;
  woodingBstMax    : number;
  catchRate        : number;
  created_at       : Date;
  constructor(
    _id               : string,
    _name             : string,
    _description      : string,
    _world            : string,
    _avatar           : string,
    _avatarBlock      : string,
    _rarityId         : number,
    _natureId         : number,
    _typeId           : number,
    _attackMin        : number,
    _attackMax        : number,
    _attackBstMin     : number,
    _attackBstMax     : number,
    _defenseMin       : number,
    _defenseMax       : number,
    _defenseBstMin    : number,
    _defenseBstMax    : number,
    _hpMin            : number,
    _hpMax            : number,
    _hpBstMin         : number,
    _hpBstMax         : number,
    _sp_attackMin     : number,
    _sp_attackMax     : number,
    _sp_attackBstMin  : number,
    _sp_attackBstMax  : number,
    _sp_defenseMin    : number,
    _sp_defenseMax    : number,
    _sp_defenseBstMin : number,
    _sp_defenseBstMax : number,
    _speedMin         : number,
    _speedMax         : number,
    _speedBstMin      : number,
    _speedBstMax      : number,
    _farmingMin       : number,
    _farmingMax       : number,
    _farmingBstMin    : number,
    _farmingBstMax    : number,
    _steelingMin      : number,
    _steelingMax      : number,
    _steelingBstMin   : number,
    _steelingBstMax   : number,
    _woodingMin       : number,
    _woodingMax       : number,
    _woodingBstMin    : number,
    _woodingBstMax    : number,
    _catchRate        : number,
    _created_at       : Date,
  ) {
    if (!_id || _id=="0") {
      this.id = uuidv4(); // Generar un UUID si no se proporciona un ID
    } else {
      this.id = _id; // Usar el ID especificado si se proporciona
    }
    this.name             = _name            ;
    this.description      = _description     ;
    this.world            = _world           ;
    this.avatar           = _avatar          ;
    this.avatarBlock      = _avatarBlock     ;
    this.rarityId         = _rarityId        ;
    this.natureId         = _natureId        ;
    this.typeId           = _typeId          ;
    this.attackMin        = _attackMin       ;
    this.attackMax        = _attackMax       ;
    this.attackBstMin     = _attackBstMin    ;
    this.attackBstMax     = _attackBstMax    ;
    this.defenseMin       = _defenseMin      ;
    this.defenseMax       = _defenseMax      ;
    this.defenseBstMin    = _defenseBstMin   ;
    this.defenseBstMax    = _defenseBstMax   ;
    this.hpMin            = _hpMin           ;
    this.hpMax            = _hpMax           ;
    this.hpBstMin         = _hpBstMin        ;
    this.hpBstMax         = _hpBstMax        ;
    this.sp_attackMin     = _sp_attackMin    ;
    this.sp_attackMax     = _sp_attackMax    ;
    this.sp_attackBstMin  = _sp_attackBstMin ;
    this.sp_attackBstMax  = _sp_attackBstMax ;
    this.sp_defenseMin    = _sp_defenseMin   ;
    this.sp_defenseMax    = _sp_defenseMax   ;
    this.sp_defenseBstMin = _sp_defenseBstMin;
    this.sp_defenseBstMax = _sp_defenseBstMax;
    this.speedMin         = _speedMin        ;
    this.speedMax         = _speedMax        ;
    this.speedBstMin      = _speedBstMin     ;
    this.speedBstMax      = _speedBstMax     ;
    this.farmingMin       = _farmingMin      ;
    this.farmingMax       = _farmingMax      ;
    this.farmingBstMin    = _farmingBstMin   ;
    this.farmingBstMax    = _farmingBstMax   ;
    this.steelingMin      = _steelingMin     ;
    this.steelingMax      = _steelingMax     ;
    this.steelingBstMin   = _steelingBstMin  ;
    this.steelingBstMax   = _steelingBstMax  ;
    this.woodingMin       = _woodingMin      ;
    this.woodingMax       = _woodingMax      ;
    this.woodingBstMin    = _woodingBstMin   ;
    this.woodingBstMax    = _woodingBstMax   ;
    this.catchRate        = _catchRate       ;
    this.created_at       = _created_at      ;
  }
}