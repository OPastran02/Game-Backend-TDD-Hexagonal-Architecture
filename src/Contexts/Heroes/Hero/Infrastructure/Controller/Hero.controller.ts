import { LootboxGenerator } from "../../Application/LootBoxGenerator";
import { probabilities } from "../../Application/Probabilities";
import { FindById } from "../../Application/FindById";
//import { Create } from "../../Application/Create";

import { HeroRepositoryPrismaMySQL } from '../HeroRepositoryPrismaMySQL';
//import { TypeRepositoryPrismaMySQL } from '../../../Type/Infrastructure/TypeRepositoryPrismaMySQL'
//import { AvailableHeroesRepositoryPrismaMySQL } from '../../../../AvailableHeroes/Infrastructure/AvailableHeroesRepositoryPrismaMySQL';
//import { RarityRepositoryPrismaMySQL } from '../../../Rarity/Infrastructure/RarityRepositoryPrismaMySQL';
//import { NatureRepositoryPrismaMySQL } from '../../../Nature/Infrastructure/NatureRepositoryPrismaMySQL';

import { Body, Controller, Post, Route } from "tsoa";
import { Hero } from "../../Domain/Hero";


@Route('hero')
export class HeroController extends Controller {
  //private readonly _create: Create;
  private readonly _findById: FindById;
  private readonly _probabilities: probabilities;
 // private readonly _lootboxGenerator: LootboxGenerator;

  constructor() {
    super();
    var _heroRepository = new HeroRepositoryPrismaMySQL;
   // var _availableHeroes = new AvailableHeroesRepositoryPrismaMySQL;
    //var _typeRepository = new TypeRepositoryPrismaMySQL;
    //var _rarityRepository = new RarityRepositoryPrismaMySQL;
   /// var _natureRepository = new NatureRepositoryPrismaMySQL;
    var _lootboxGenerator = new LootboxGenerator;

    //this._create = new Create(_heroRepository,_availableHeroes,_typeRepository,_rarityRepository,_natureRepository,_lootboxGenerator);
    this._findById = new FindById(_heroRepository);
    this._probabilities = new probabilities(_lootboxGenerator);
    //this._lootboxGenerator = new LootboxGenerator();
  }

  @Post('/add')
  public async create(): Promise<Hero | null> {     
    return this._findById.findById(1);
  }

  @Post('/findById')
  public async findById(@Body() requestBody:{id:number}): Promise<Hero | null> {
      const {id} = requestBody;
      return await this._findById.findById(id);
  }

  @Post('/numbers')
  public async probabilities(@Body() requestBody:{id:number}): Promise<number[]> {
      const {id} = requestBody;
      return await this._probabilities.probabilities(id);
  }
  
 }