import { FindById } from "../../Application/FindById";
import { FindByRace } from "../../Application/FindByRace";

import { Body, Controller, Post, Route } from "tsoa";
import { WorldRepositoryPrismaMySQL } from "../WorldRepositoryPrismaMySQL";
import { World } from '../../Domain/world';

@Route('world')
export class WorldController extends Controller {
  private readonly _FindById: FindById;
  private readonly _FindByRace: FindByRace;

  constructor() {
    super();
    var repository = new WorldRepositoryPrismaMySQL();
    this._FindById = new FindById(repository);
    this._FindByRace = new FindByRace(repository);
  }

  @Post('/findById')
  public async findById(@Body() requestBody:{id:number}): Promise<World> {
      const {id} = requestBody;
      return await this._FindById.findById(id);
  }

  @Post('/findByRace')
  public async findByRace(@Body() requestBody:{id:number}): Promise<World[]> {
      const {id} = requestBody;
      return await this._FindByRace.findByRace(id);
  }

  
 }