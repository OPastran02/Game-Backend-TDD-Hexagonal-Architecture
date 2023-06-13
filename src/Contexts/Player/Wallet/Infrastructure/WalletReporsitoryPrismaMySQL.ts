import { IWalletRepository } from '../Domain/interfaces/Wallet.interface';
import { Wallet } from '../Domain/Wallet';
import prisma from '../../../../../prisma/index';


export class WalletReporsitoryPrismaMySQL implements IWalletRepository {
  
  public async createWallet(wallet: Wallet): Promise<Wallet> {
    return await prisma.players_wallet.create({
        data: {
          exp_rarity: wallet.exp_rarity,
          exp_quantity: wallet.exp_quantity,
          gameId: wallet.gameId,
          playerId: wallet.playerId,
        }
    });
  }

  public async findWalletsByPlayerId(gameId: number,playerId: string): Promise<Wallet[] | null> {
    return await prisma.players_wallet.findMany({
        where: {
          gameId: gameId,
          playerId: playerId
        }
      });
  }

  public async findWalletsByPlayerIdRarity(gameId: number,playerId: string, exp_rarity:number): Promise<Wallet | null> {
    return await prisma.players_wallet.findFirstOrThrow({
        where: {
          gameId: gameId,
          playerId: playerId,
          exp_rarity: exp_rarity,
        }
      });
  }

  public async addExperience(gameId: number,playerId: string, exp_rarity:number, _exp_quantity: number): Promise<void> {
    await prisma.players_wallet.updateMany({
        where: {
          gameId: gameId,
          playerId: playerId,
          exp_rarity: exp_rarity,
        },
        data: {
          exp_quantity: _exp_quantity,
        },
      });     
  }
}
