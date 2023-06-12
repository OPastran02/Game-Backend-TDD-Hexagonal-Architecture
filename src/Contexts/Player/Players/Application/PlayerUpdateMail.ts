import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerMail } from '../Domain/value-object/PlayerMail';


export class PlayerUpdateMail {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerUpdateMail(playerId: string, playerMail: string): Promise<void> {
    const mail = new PlayerMail(playerMail);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      player.mail = mail.value;
      await this.playerRepository.playerUpdateMail(playerId, player.mail);
    }
  }
}

