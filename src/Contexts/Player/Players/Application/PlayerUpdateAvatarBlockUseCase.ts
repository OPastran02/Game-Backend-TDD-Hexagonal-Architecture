import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerAvatarBlock } from '../Domain/value-object/PlayerAvatarBlock';

export class PlayerUpdateAvatarBlockUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerUpdateAvatarBlock(playerId: string, playerAvatar: string): Promise<void> {
    const avatar = new PlayerAvatarBlock(playerAvatar);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      player.avatarBlock = avatar.getValue();
      await this.playerRepository.playerUpdateAvatar(playerId, player.avatarBlock);
    }
  }
}

