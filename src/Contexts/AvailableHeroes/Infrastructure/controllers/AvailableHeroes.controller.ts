import { AvailableHeroFindById } from "../../Application/AvailableHeroFindById";
import { AvailableHeroFindByRarity } from "../../Application/AvailableHeroFindByRarity";

import { Body, Controller, Post, Route } from "tsoa";
import { AvailableHeroesRepositoryPrismaMySQL } from "../AvailableHeroesRepositoryPrismaMySQL";
import { AvailableHeroes } from '../../Domain/AvailableHeroes';

@Route('availableHeroes')
export class AvailableHeroesController extends Controller {
  private readonly _availableHeroFindById: AvailableHeroFindById;
  private readonly _availableHeroFindByRarity: AvailableHeroFindByRarity;


  constructor() {
    super();
    var availableHeroesRepository = new AvailableHeroesRepositoryPrismaMySQL();
    this._availableHeroFindById = new AvailableHeroFindById(availableHeroesRepository)
    this._availableHeroFindByRarity = new AvailableHeroFindByRarity(availableHeroesRepository)

  }


  @Post('/findById')
  public async playerFindById(@Body() requestBody:{id:number}): Promise<AvailableHeroes> {
      const {id} = requestBody;
      return await this._availableHeroFindById.availableHeroFindById(id);
  }

  @Post('/findByRarity')
  public async availableHeroFindByRarity(@Body() requestBody:{id:number}): Promise<AvailableHeroes[]> {
      const {id} = requestBody;
      return await this._availableHeroFindByRarity.availableHeroFindByRarity(id);
  }
 }