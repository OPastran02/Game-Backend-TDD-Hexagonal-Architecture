import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerAvatar } from '../Domain/value-object/PlayerAvatar';


export class PlayerUpdateAvatarUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerUpdateAvatar(playerId: string, playerAvatar: string): Promise<void> {
    const avatar = new PlayerAvatar(playerAvatar);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      player.avatar = avatar.getValue();
      await this.playerRepository.playerUpdateAvatar(playerId, player.avatar);
    }
  }
}

