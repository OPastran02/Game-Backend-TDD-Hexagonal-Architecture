import { FindById } from "../../Application/FindById";

import { Body, Controller, Post, Route } from "tsoa";
import { RaceRepositoryPrismaMySQL } from "../RaceRepositoryPrismaMySQL";
import { Race } from '../../Domain/Race';

@Route('race')
export class RaceController extends Controller {
  private readonly _findById: FindById;

  constructor() {
    super();
    var raceRepository = new RaceRepositoryPrismaMySQL();
    this._findById = new FindById(raceRepository);
  }

  @Post('/findById')
  public async findById(@Body() requestBody:{id:number}): Promise<Race> {
      const {id} = requestBody;
      return await this._findById.findById(id);
  }


  
 }