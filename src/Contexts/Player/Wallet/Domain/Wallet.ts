import { ExperienceRarity } from './value-object/ExperienceRarity';
import { ExperienceQuantity } from './value-object/ExperienceQuantity';
import { GameId } from './value-object/GameId';


export class Wallet {
  exp_rarity: number;
  exp_quantity: number;
  gameId: number;
  playerId: string;

  constructor(
    _exp_rarity: number,
    _exp_quantity: number,
    _gameId: number,
    _playerId: string,
  ) {
    this.exp_rarity = new ExperienceRarity(_exp_rarity).getValue();
    this.exp_quantity = new ExperienceQuantity(_exp_quantity).getValue();
    this.gameId = new GameId(_gameId).getValue();
    this.playerId = _playerId;
  }
}