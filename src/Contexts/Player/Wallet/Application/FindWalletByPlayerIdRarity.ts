import { IWalletRepository } from '../Domain/interfaces/Wallet.interface';
import { Wallet } from '../Domain/Wallet';

export class FindWalletByPlayerIdRarity {
  private walletRepository: IWalletRepository;

  constructor(walletRepository: IWalletRepository) {
    this.walletRepository = walletRepository;
  }

  public async findWalletsByPlayerIdRarity(gameId: number,playerId: string, exp_rarity:number) : Promise<Wallet | null> {
    return await this.walletRepository.findWalletsByPlayerIdRarity(gameId,playerId,exp_rarity);
  }
}
