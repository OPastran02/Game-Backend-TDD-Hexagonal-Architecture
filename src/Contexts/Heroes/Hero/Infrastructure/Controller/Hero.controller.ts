import { LootboxGenerator } from "../../Application/LootBoxGenerator";
import { probabilities } from "../../Application/Probabilities";
import { FindById } from "../../Application/FindById";
import { Create } from "../../Application/Create";
import { IsThereAnyHeroInQueue } from "../../Application/IsThereAnyHeroInQueue";
import { FindByRace } from "../../Application/FindByRace";
import { DeleteHeroInQueue } from "../../Application/DeleteHeroInQueue";
import { FindByPlayerWorld } from "../../Application/FindByPlayerWorld";
import { FindByPlayerTopFive } from "../../Application/FindByPlayerTopFive";
import { FindbyPlayer } from "../../Application/FindByPlayer";
import { ReplaceHeroInGeneralTeam } from "../../Application/ReplaceHeroInGeneralTeam";

import { HeroRepositoryPrismaMySQL } from '../HeroRepositoryPrismaMySQL';
import { TypeRepositoryPrismaMySQL } from '../../../Type/Infrastructure/TypeRepositoryPrismaMySQL'
import { AvailableHeroesRepositoryPrismaMySQL } from '../../../../AvailableHeroes/Infrastructure/AvailableHeroesRepositoryPrismaMySQL';
import { RarityRepositoryPrismaMySQL } from '../../../Rarity/Infrastructure/RarityRepositoryPrismaMySQL';
import { NatureRepositoryPrismaMySQL } from '../../../Nature/Infrastructure/NatureRepositoryPrismaMySQL';
import { PlayerRepositoryPrismaMySQL } from '../../../../Player/Players/Infrastructure/PlayerRepositoryPrismaMySQL';
import { RaceRepositoryPrismaMySQL } from '../../../Race/Infrastructure/RaceRepositoryPrismaMySQL';

import { Body, Controller, Post, Route } from "tsoa";
import { Hero } from "../../Domain/Hero";


@Route('hero')
export class HeroController extends Controller {
  private readonly _create: Create;
  private readonly _findById: FindById;
  private readonly _probabilities: probabilities;
  private readonly _lootboxGenerator: LootboxGenerator;
  private readonly _isThereAnyHeroInQueue: IsThereAnyHeroInQueue;
  private readonly _findByRace: FindByRace;
  private readonly _deleteHeroInQueue: DeleteHeroInQueue;
  private readonly _findByPlayerWorld: FindByPlayerWorld;
  private readonly _findByPlayerTopFive: FindByPlayerTopFive;
  private readonly _findbyPlayer: FindbyPlayer;
  private readonly _replaceHeroInGeneralTeam: ReplaceHeroInGeneralTeam;

  constructor() {
    super();
    var _heroRepository = new HeroRepositoryPrismaMySQL;
    var _availableHeroes = new AvailableHeroesRepositoryPrismaMySQL;
    var _typeRepository = new TypeRepositoryPrismaMySQL;
    var _rarityRepository = new RarityRepositoryPrismaMySQL;
    var _natureRepository = new NatureRepositoryPrismaMySQL;
    var _playerRepository = new PlayerRepositoryPrismaMySQL;
    var _raceRepository = new RaceRepositoryPrismaMySQL;
    this._lootboxGenerator = new LootboxGenerator(Date.now().toString());

    this._create = new Create(_heroRepository,_availableHeroes,_typeRepository,_rarityRepository,_natureRepository,_playerRepository,_raceRepository);
    this._findById = new FindById(_heroRepository);
    this._probabilities = new probabilities(this._lootboxGenerator);
    this._isThereAnyHeroInQueue = new IsThereAnyHeroInQueue(_heroRepository);
    this._findByRace = new FindByRace(_heroRepository);
    this._deleteHeroInQueue = new DeleteHeroInQueue(_heroRepository);
    this._findByPlayerWorld = new FindByPlayerWorld(_heroRepository);
    this._findByPlayerTopFive = new FindByPlayerTopFive(_heroRepository);
    this._findbyPlayer = new FindbyPlayer(_heroRepository);
    this._replaceHeroInGeneralTeam = new ReplaceHeroInGeneralTeam(_heroRepository);
  }

  @Post('/add')
  public async create(@Body() requestBody:{id:string, booster:number[],modifier:number,_race:number}): Promise<Hero> {   
    const {id,booster,modifier,_race} = requestBody;  
    return this._create.Create(id,booster,modifier,_race);
  }

  @Post('/findById')
  public async findById(@Body() requestBody:{id:number}): Promise<Hero | null> {
      const {id} = requestBody;
      return await this._findById.findById(id);
  }

  @Post('/findByPlayerWorld')
  public async findByPlayerWorld(@Body() requestBody:{id:string, world: number}): Promise<Hero[] | null> {
      const {id, world} = requestBody;
      return await this._findByPlayerWorld.findByPlayerWorld(id, world);
  }

  @Post('/findByPlayer')
  public async findbyPlayer(@Body() requestBody:{id:string}): Promise<Hero[] | null> {
      const {id} = requestBody;
      return await this._findbyPlayer.findbyPlayer(id);
  }

  @Post('/findByPlayerTopFive')
  public async findByPlayerTopFive(@Body() requestBody:{id:string}): Promise<Hero[] | null> {
      const {id} = requestBody;
      return await this._findByPlayerTopFive.findByPlayerTopFive(id);
  }

  @Post('/numbers')
  public async probabilities(@Body() requestBody:{id:number}): Promise<number[]> {
      const {id} = requestBody;
      return await this._probabilities.probabilities(id);
  }

  @Post('/isHeroInQueue')
  public async IsThereAnyHeroInQueue(@Body() requestBody:{id:string, queue: boolean}): Promise<number> {
      const {id,queue} = requestBody;
      return await this._isThereAnyHeroInQueue.IsThereAnyHeroInQueue(id,queue);
  }

  @Post('/findByRace')
  public async findByRace(@Body() requestBody:{race:number, id:string}): Promise<Hero[] | null> {
      const {race, id} = requestBody;
      return await this._findByRace.findByRace(race, id);
  }

  @Post('/deleteHeroInQueue')
  public async deleteHeroInQueue(@Body() requestBody:{id:string}): Promise<void> {
      const {id} = requestBody;
      return await this._deleteHeroInQueue.deleteHeroInQueue(id);
  }

  @Post('/replaceHeroInGeneralTeam')
  public async replaceHeroInGeneralTeam(@Body() requestBody:{id1 : string, order1 : number, id2 : string, order2 : number}): Promise<void> {
      const {id1,order1,id2,order2} = requestBody;
      return await this._replaceHeroInGeneralTeam.replaceHeroInGeneralTeam(id1,order1,id2,order2);
  }
  
 }