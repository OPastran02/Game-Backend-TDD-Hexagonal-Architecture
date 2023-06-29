import { FindByMundo } from "../../Application/FindByMundo";

import { Body, Controller, Post, Route } from "tsoa";
import { WavesRepositoryPrismaMySQL } from "../WavesRepositoryPrismaMySQL";
import { Waves } from '../../Domain/Waves';

@Route('waves')
export class WavesController extends Controller {
  private readonly _findByMundo: FindByMundo;

  constructor() {
    super();
    var repository = new WavesRepositoryPrismaMySQL();
    this._findByMundo = new FindByMundo(repository);
  }

  @Post('/findByMundo')
  public async findByMundo(@Body() requestBody:{id:number}): Promise<Waves> {
      const {id} = requestBody;
      return await this._findByMundo.findByMundo(id);
  }


  
 }