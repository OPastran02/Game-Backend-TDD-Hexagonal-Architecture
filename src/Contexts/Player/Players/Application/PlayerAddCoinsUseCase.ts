import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerCoins } from '../Domain/value-object/PlayerCoins';

export class PlayerAddCoinsUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerAddcoins(playerId: string, _coins: number): Promise<void> {
    const coins = new PlayerCoins(_coins);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      player.coins += coins.getValue();
      await this.playerRepository.playerAddCoins(playerId, player.coins);
    }
  }
}
