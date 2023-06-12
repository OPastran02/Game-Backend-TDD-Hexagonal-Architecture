import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerNickname } from '../Domain/value-object/PlayerNickname';
import { PlayerFirstName } from '../Domain/value-object/PlayerFirstName';
import { PlayerLastName } from '../Domain/value-object/PlayerLastName';



export class PlayerUpdateNamesUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerUpdateNames(playerId: string, _playerNickname: string, _playerFirstName: string, _playerLastName: string): Promise<void> {
    const playerNickname = new PlayerNickname(_playerNickname);
    const playerFirstName = new PlayerFirstName(_playerFirstName);
    const playerLastName = new PlayerLastName(_playerLastName);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      player.nickname = playerNickname.getValue();
      player.firstname = playerFirstName.getValue();
      player.lastname = playerLastName.getValue();
      await this.playerRepository.playerUpdateNames(playerId, player.nickname, player.firstname, player.lastname);
    }
  }
}
