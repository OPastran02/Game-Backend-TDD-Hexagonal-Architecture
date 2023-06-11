import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerId } from '../../Shared/Domain/Courses/PlayerId';
import { PlayerGoogleId } from '../Domain/value-object/PlayerGoogleId';
import { PlayerFacebookId } from '../Domain/value-object/PlayerFacebookId';
import { PlayerAppleId } from '../Domain/value-object/PlayerAppleId';
import { PlayerMail } from '../Domain/value-object/PlayerMail';
import { PlayerNickname } from '../Domain/value-object/PlayerNickname';
import { PlayerFirstName } from '../Domain/value-object/PlayerFirstName';
import { PlayerLastName } from '../Domain/value-object/PlayerLastName';
import { PlayerPhrase } from '../Domain/value-object/PlayerPhrase';
import { PlayerCoins } from '../Domain/value-object/PlayerCoins';
import { PlayerDiamonds } from '../Domain/value-object/PlayerDiamonds';
import { PlayerExperience } from '../Domain/value-object/PlayerExperience';
import { PlayerLevel } from '../Domain/value-object/PlayerLevel';
import { PlayerAvatar } from '../Domain/value-object/PlayerAvatar';
import { PlayerAvatarBlock } from '../Domain/value-object/PlayerAvatarBlock';
import { PlayerLoginDays } from '../Domain/value-object/PlayerLoginDays';
import { PlayerLastLogin } from '../Domain/value-object/PlayerLastLogin';
import { PlayerIsActive } from '../Domain/value-object/PlayerIsActive';
import { PlayerCreatedAt } from '../Domain/value-object/PlayerCreatedAt';

export class PlayerCreateUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async addPlayer(
    _id: PlayerId,
    _googleId: PlayerGoogleId,
    _facebookId: PlayerFacebookId,
    _appleId: PlayerAppleId,
    _mail: PlayerMail,
    _nickname: PlayerNickname,
    _firstname: PlayerFirstName,
    _lastname: PlayerLastName,
    _phrase: PlayerPhrase,
    _coins: PlayerCoins,
    _diamonds: PlayerDiamonds,
    _experience: PlayerExperience,
    _level: PlayerLevel,
    _avatar: PlayerAvatar,
    _avatarBlock: PlayerAvatarBlock,
    _loginDays: PlayerLoginDays,
    _lastLogin: PlayerLastLogin,
    _isActive: PlayerIsActive,
    _createdAt: PlayerCreatedAt
  ): Promise<Player> {
    const player: Player = new Player(
      _id,
      _googleId,
      _facebookId,
      _appleId,
      _mail,
      _nickname,
      _firstname,
      _lastname,
      _phrase,
      _coins,
      _diamonds,
      _experience,
      _level,
      _avatar,
      _avatarBlock,
      _loginDays,
      _lastLogin,
      _isActive,
      _createdAt
    );

    // Realizar validaciones adicionales antes de agregar el jugador
    // ...

    return await this.playerRepository.addPlayer(player);
  }
}

