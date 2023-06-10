import { PlayerId } from '../../Shared/Domain/Courses/PlayerId';
import { PlayerGoogleId } from './value-object/PlayerGoogleId';
import { PlayerFacebookId } from './value-object/PlayerFacebookId';
import { PlayerAppleId } from './value-object/PlayerAppleId';
import { PlayerMail } from './value-object/PlayerMail';
import { PlayerNickname } from './value-object/PlayerNickname';
import { PlayerFirstName } from './value-object/PlayerFirstName';
import { PlayerLastName } from './value-object/PlayerLastName';
import { PlayerPhrase } from './value-object/PlayerPhrase';
import { PlayerCoins } from './value-object/PlayerCoins';
import { PlayerDiamonds } from './value-object/PlayerDiamonds';
import { PlayerExperience } from './value-object/PlayerExperience';
import { PlayerLevel } from './value-object/PlayerLevel';
import { PlayerAvatar } from './value-object/PlayerAvatar';
import { PlayerAvatarBlock } from './value-object/PlayerAvatarBlock';
import { PlayerLoginDays } from './value-object/PlayerLoginDays';
import { PlayerLastLogin } from './value-object/PlayerLastLogin';
import { PlayerIsActive } from './value-object/PlayerIsActive';
import { PlayerCreatedAt } from './value-object/PlayerCreatedAt';



export class Player {
  
  private readonly id   : PlayerId;
  private googleId      : PlayerGoogleId;
  private facebookId    : PlayerFacebookId;
  private appleId       : PlayerAppleId;
  private mail          : PlayerMail;
  private nickname      : PlayerNickname;
  private firstname     : PlayerFirstName;
  private lastname      : PlayerLastName;
  private phrase        : PlayerPhrase;
  private coins         : PlayerCoins; 
  private diamonds      : PlayerDiamonds; 
  private experience    : PlayerExperience; 
  private level         : PlayerLevel; 
  private avatar        : PlayerAvatar; 
  private avatarBlock   : PlayerAvatarBlock; 
  private loginDays     : PlayerLoginDays; 
  private lastLogin     : PlayerLastLogin; 
  private isActive      : PlayerIsActive; 
  private createdAt     : PlayerCreatedAt; 

  constructor(
      _id               : PlayerId,
      _googleId         : PlayerGoogleId,
      _facebookId       : PlayerFacebookId,
      _appleId          : PlayerAppleId, 
      _mail             : PlayerMail, 
      _nickname         : PlayerNickname,
      _firstname        : PlayerFirstName, 
      _lastname         : PlayerLastName,
      _phrase           : PlayerPhrase,
      _coins            : PlayerCoins,
      _diamonds         : PlayerDiamonds, 
      _experience       : PlayerExperience, 
      _level            : PlayerLevel,
      _avatar           : PlayerAvatar,  
      _avatarBlock      : PlayerAvatarBlock, 
      _loginDays        : PlayerLoginDays, 
      _lastLogin        : PlayerLastLogin, 
      _isActive         : PlayerIsActive, 
      _createdAt        : PlayerCreatedAt
  ) {
    this.id             = _id;
    this.googleId       = _googleId;
    this.facebookId     = _facebookId;
    this.appleId        = _appleId;
    this.mail           = _mail;
    this.nickname       = _nickname;
    this.firstname      = _firstname;
    this.lastname       = _lastname;
    this.phrase         = _phrase;
    this.coins          = _coins;
    this.diamonds       = _diamonds;
    this.experience     = _experience;
    this.level          = _level;
    this.avatar         = _avatar;
    this.avatarBlock    = _avatarBlock;
    this.loginDays      = _loginDays;
    this.lastLogin      = _lastLogin;
    this.isActive       = _isActive;
    this.createdAt      = _createdAt;
  }

}