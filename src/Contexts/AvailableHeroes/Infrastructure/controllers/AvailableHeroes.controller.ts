import { AvailableHeroFindById } from "../../Application/AvailableHeroFindById";

import { Body, Controller, Post, Route } from "tsoa";
import { AvailableHeroesRepositoryPrismaMySQL } from "../AvailableHeroesRepositoryPrismaMySQL";
import { AvailableHeroes } from '../../Domain/AvailableHeroes';

@Route('availableHeroes')
export class AvailableHeroesController extends Controller {
  private readonly _availableHeroFindById: AvailableHeroFindById;


  constructor() {
    super();
    var availableHeroesRepository = new AvailableHeroesRepositoryPrismaMySQL();
    this._availableHeroFindById = new AvailableHeroFindById(availableHeroesRepository)
  }


  @Post('/findById')
  public async playerFindById(@Body() requestBody:{id:number}): Promise<AvailableHeroes> {
      const {id} = requestBody;
      return await this._availableHeroFindById.availableHeroFindById(id);
  }
 }