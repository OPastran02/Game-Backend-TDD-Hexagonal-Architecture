import { IWalletRepository } from '../Domain/interfaces/Wallet.interface';
import { Wallet } from '../Domain/Wallet';
import { ExperienceQuantity } from '../Domain/value-object/ExperienceQuantity';

export class AddExperience {
  private walletRepository: IWalletRepository;

  constructor(walletRepository: IWalletRepository) {
    this.walletRepository = walletRepository;
  }

  public async addExperience(gameId: number,playerId: string, exp_rarity:number, _exp_quantity: number): Promise<void> {
    const exp_quantity = new ExperienceQuantity(_exp_quantity);
    const wallet: Wallet | null = await this.walletRepository.findWalletsByPlayerIdRarity(gameId, playerId, exp_rarity);
    if (wallet) {
        wallet.exp_quantity = exp_quantity.getValue();
      await this.walletRepository.addExperience(gameId, playerId,wallet.exp_rarity,wallet.exp_quantity);
    }
  }
}

