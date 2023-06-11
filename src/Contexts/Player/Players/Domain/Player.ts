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
import { v4 as uuidv4 } from 'uuid';

export class Player {
  id: string;
  googleId: string | null;
  facebookId: string| null;
  appleId: string| null;
  mail: string;
  nickname: string| null;
  firstname: string| null;
  lastname: string| null;
  phrase: string| null;
  coins: number;
  diamonds: number;
  experience: number;
  level: number;
  avatar: string;
  avatarBlock: string;
  loginDays: number;
  lastLogin: Date;
  isActive: boolean;
  createdAt: Date;

  constructor(
    __id: string,
    _googleId: string | null,
    _facebookId: string | null,
    _appleId: string | null,
    _mail: string,
    _nickname: string | null,
    _firstname: string | null,
    _lastname: string | null,
    _phrase: string | null,
    _coins: number,
    _diamonds: number,
    _experience: number,
    _level: number,
    _avatar: string,
    _avatarBlock: string,
    _loginDays: number,
    _lastLogin: Date,
    _isActive: boolean,
    _createdAt: Date
  ) {
    this.id = uuidv4();
    this.googleId = new PlayerGoogleId(_googleId).getValue();
    this.facebookId =  new PlayerFacebookId(_facebookId).getValue();
    this.appleId = new PlayerAppleId(_appleId).getValue();
    this.mail = new PlayerMail(_mail).value;
    this.nickname = new PlayerNickname(_nickname).getValue();
    this.firstname = new PlayerFirstName(_firstname).getValue();
    this.lastname =  new PlayerLastName(_lastname).getValue();
    this.phrase = new PlayerPhrase(_phrase).getValue();
    this.coins = new PlayerCoins(_coins).getValue();
    this.diamonds = new PlayerDiamonds(_diamonds).getValue();
    this.experience = new PlayerExperience(_experience).getValue();
    this.level = new PlayerLevel(_level).getValue();
    this.avatar = new PlayerAvatar(_avatar).getValue();
    this.avatarBlock = new PlayerAvatarBlock(_avatarBlock).getValue();
    this.loginDays = new PlayerLoginDays(_loginDays).getValue();
    this.lastLogin = _lastLogin;
    this.isActive = _isActive;
    this.createdAt = _createdAt;
  }
}