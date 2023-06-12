import { IWalletRepository } from '../Domain/interfaces/Wallet.interface';
import { Wallet } from '../Domain/Wallet';

export class CreateWallet {
  private walletRepository: IWalletRepository;

  constructor(walletRepository: IWalletRepository) {
    this.walletRepository = walletRepository;
  }

  public async createWallet(
    _id: number,
    exp_rarity: number,
    exp_quantity: number,
    gameId: number,
    playerId: string,
  ): Promise<Wallet> {
    const wallet: Wallet = new Wallet(
      exp_rarity,
      exp_quantity,
      gameId,
      playerId
    );

    return await this.walletRepository.createWallet(wallet, wallet.gameId,wallet.playerId);
  }
}

