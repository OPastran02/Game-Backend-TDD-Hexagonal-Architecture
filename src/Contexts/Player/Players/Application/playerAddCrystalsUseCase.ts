import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerCoins } from '../Domain/value-object/PlayerCoins';

export class PlayerAddCrystalsUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerAddCrystals(playerId: string, _crystals: number): Promise<void> {
    const crystals = new PlayerCoins(_crystals);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      player.crystals += crystals.getValue();
      await this.playerRepository.playerAddCrystals(playerId, player.crystals);
    }
  }
}
