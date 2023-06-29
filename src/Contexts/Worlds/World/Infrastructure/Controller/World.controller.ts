import { FindById } from "../../Application/FindById";
import { FindByRace } from "../../Application/FindByRace";
import { FindAllWorlds } from "../../Application/FindAllWorlds";

import { Body, Controller, Post, Route } from "tsoa";
import { WorldRepositoryPrismaMySQL } from "../WorldRepositoryPrismaMySQL";
import { World } from '../../Domain/world';

@Route('world')
export class WorldController extends Controller {
  private readonly _FindById: FindById;
  private readonly _FindByRace: FindByRace;
  private readonly _FindAllWorlds: FindAllWorlds;

  constructor() {
    super();
    var repository = new WorldRepositoryPrismaMySQL();
    this._FindById = new FindById(repository);
    this._FindByRace = new FindByRace(repository);
    this._FindAllWorlds = new FindAllWorlds(repository);
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

  @Post('/findAllWorlds')
  public async findAllWorlds(): Promise<World[]> {
      return await this._FindAllWorlds.findAllWorlds();
  }

  
 }