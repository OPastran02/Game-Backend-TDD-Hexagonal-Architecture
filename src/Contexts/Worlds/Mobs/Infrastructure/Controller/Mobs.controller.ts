import { FindByWave } from "../../Application/FindByWave";

import { Body, Controller, Post, Route } from "tsoa";
import { MobsRepositoryPrismaMySQL } from "../MobsRepositoryPrismaMySQL";
import { Mobs } from '../../Domain/Mobs';

@Route('mobs')
export class MobsController extends Controller {
  private readonly _findByWave: FindByWave;

  constructor() {
    super();
    var repository = new MobsRepositoryPrismaMySQL();
    this._findByWave = new FindByWave(repository);
  }

  @Post('/findByWave')
  public async findByWave(@Body() requestBody:{id:number}): Promise<Mobs> {
      const {id} = requestBody;
      return await this._findByWave.findByWave(id);
  }


  
 }