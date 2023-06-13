import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerDiamonds } from '../Domain/value-object/PlayerDiamonds';

export class playerAddDiamonsUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerAddDiamonds(playerId: string, _diamonds: number): Promise<void> {
    const diamonds = new PlayerDiamonds(_diamonds);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      player.diamonds = diamonds.getValue();
      await this.playerRepository.playerAddDiamons(playerId, player.diamonds);
    }
  }
}
