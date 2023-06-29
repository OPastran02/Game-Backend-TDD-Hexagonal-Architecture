import { FindByMundo } from "../../Application/FindByMundo";

import { Body, Controller, Post, Route } from "tsoa";
import { RewardRepositoryPrismaMySQL } from "../RewardRepositoryPrismaMySQL";
import { Reward } from '../../Domain/Reward';

@Route('reward')
export class RewardController extends Controller {
  private readonly _findByMundo: FindByMundo;

  constructor() {
    super();
    var repository = new RewardRepositoryPrismaMySQL();
    this._findByMundo = new FindByMundo(repository);
  }

  @Post('/findByMundo')
  public async findByMundo(@Body() requestBody:{id:number}): Promise<Reward> {
      const {id} = requestBody;
      return await this._findByMundo.findByMundo(id);
  }


  
 }