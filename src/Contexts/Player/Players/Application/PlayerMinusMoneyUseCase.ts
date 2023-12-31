import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerCoins } from '../Domain/value-object/PlayerCoins';

export class PlayerMinusMoneyUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerMinusMoney(playerId: string, _coins:number, _diamonds:number, _crystals:number): Promise<number> {
    const coins = new PlayerCoins(_coins);
    const diamonds = new PlayerCoins(_diamonds);
    const crystals = new PlayerCoins(_crystals);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      if ((player.coins - coins.getValue()) < 0) return 0;
      if ((player.diamonds - diamonds.getValue()) < 0) return 0;
      if ((player.crystals - crystals.getValue()) < 0) return 0;
      return 1;
    }else{
      return 0;
    }
  }
}
