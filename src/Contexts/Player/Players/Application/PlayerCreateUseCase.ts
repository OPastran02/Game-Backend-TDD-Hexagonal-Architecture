import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';

export class PlayerCreateUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async addPlayer(
    _id:number,
    _googleId: string|null,
    _facebookId: string|null,
    _appleId: string|null,
    _mail: string,
    _nickname: string|null,
    _firstname: string|null,
    _lastname: string|null,
    _phrase: string|null,
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

