import { Wallet } from '../wallet';

export interface IWalletRepository {
    
    createWallet(wallet: Wallet, gameId:number, playerId: string): Promise<Wallet>;

    findWalletsByPlayerId(gameId: number,playerId: string): Promise<Wallet[] | null>;

    findWalletsByPlayerIdRarity(gameId: number,playerId: string, exp_rarity:number): Promise<Wallet | null>;

    addExperience(gameId: number,playerId: string, exp_rarity:number, exp_quantity: number): Promise<void>;

}
