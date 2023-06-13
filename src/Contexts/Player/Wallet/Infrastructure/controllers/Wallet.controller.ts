import { AddExperience } from "../../Application/AddExperience";
import { CreateWallet } from "../../Application/CreateWallet";
import { FindWalletByPlayerId } from "../../Application/FindWalletByPlayerId";
import { FindWalletByPlayerIdRarity } from "../../Application/FindWalletByPlayerIdRarity";


import { Body, Controller, Post, Route } from "tsoa";
import { WalletReporsitoryPrismaMySQL } from "../WalletReporsitoryPrismaMySQL";
import { Wallet } from '../../Domain/Wallet';

@Route('wallet')
export class WalletController extends Controller {
  private readonly _AddExperience: AddExperience;
  private readonly _CreateWallet: CreateWallet;
  private readonly _FindWalletByPlayerId: FindWalletByPlayerId;
  private readonly _FindWalletByPlayerIdRarityn: FindWalletByPlayerIdRarity;

  constructor() {
    super();
    var walletRepository = new WalletReporsitoryPrismaMySQL();
    this._AddExperience = new AddExperience(walletRepository)
    this._CreateWallet = new CreateWallet(walletRepository)
    this._FindWalletByPlayerId = new FindWalletByPlayerId(walletRepository)
    this._FindWalletByPlayerIdRarityn = new FindWalletByPlayerIdRarity(walletRepository)

  }

  @Post('/create')
  public async createWallet(
    @Body() requestBody: 
        {_id:number,exp_rarity: number, exp_quantity: number, gameId: number, playerId: string} 
      ): Promise<Wallet> {
      
        const {_id, exp_rarity, exp_quantity, gameId, playerId} = requestBody;

      return await this._CreateWallet.createWallet(_id, exp_rarity, exp_quantity, gameId, playerId);
  }

  @Post('/findByPlayerId')
  public async findWalletsByPlayerId(@Body() requestBody:{gameId: number,playerId: string}): Promise<Wallet[] | null> {
      const {gameId,playerId} = requestBody;
      return await this._FindWalletByPlayerId.findWalletsByPlayerId(gameId,playerId);
  }

  @Post('/findByPlayerIdRarity')
  public async findWalletsByPlayerIdRarity(@Body() requestBody:{gameId: number,playerId: string, exp_rarity:number}): Promise<Wallet | null> {
      const {gameId,playerId,exp_rarity} = requestBody;
      return await this._FindWalletByPlayerIdRarityn.findWalletsByPlayerIdRarity(gameId,playerId,exp_rarity);
  }

  @Post('/addExperience')
  public async addExperience(@Body() requestBody:{gameId: number,playerId: string, exp_rarity:number, _exp_quantity: number}): Promise<void> {
      const {gameId, playerId,exp_rarity,_exp_quantity} = requestBody;
      await this._AddExperience.addExperience(gameId, playerId,exp_rarity,_exp_quantity);
  }

 }