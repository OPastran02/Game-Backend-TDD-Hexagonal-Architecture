import { IWalletRepository } from '../Domain/interfaces/Wallet.interface';
import { Wallet } from '../Domain/Wallet';

export class FindWalletByPlayerId {
  private walletRepository: IWalletRepository;

  constructor(walletRepository: IWalletRepository) {
    this.walletRepository = walletRepository;
  }

  public async findWalletsByPlayerId(gameId: number,playerId: string) : Promise<Wallet[] | null> {
    return await this.walletRepository.findWalletsByPlayerId(gameId,playerId);
  }
}
