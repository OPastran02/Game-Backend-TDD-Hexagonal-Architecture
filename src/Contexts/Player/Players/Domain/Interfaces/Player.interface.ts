import { Player } from '../Player';
export interface IPlayerRepository {
  addOrder(player: Player): Promise<Player>;
}