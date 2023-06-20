import { Create } from "../../Application/Create";
import { FindById } from "../../Application/FindById";

import { Body, Controller, Post, Route } from "tsoa";
import { StatsRepositoryPrismaMySQL } from "../StatsRepositoryPrismaMySQL";
import { Stats } from '../../Domain/Stats';

@Route('stats')
export class StatsController extends Controller {
  private readonly _create: Create;
  private readonly _findById: FindById;

  constructor() {
    super();
    var repository = new StatsRepositoryPrismaMySQL();
    this._create = new Create(repository);
    this._findById = new FindById(repository);
  }

  @Post('/add')
  public async create(
    @Body() requestBody: 
        { 
          id:            string,      
          attack:        number,  
          defense:       number,  
          hp:            number,  
          sp_attack:     number,  
          sp_defense:    number,  
          speed:         number,  
          farming:       number,  
          steeling:      number,  
          wooding:       number,  
          attackBst:     number,  
          defenseBst:    number,  
          hpBst:         number,  
          sp_attackBst:  number,  
          sp_defenseBst: number,  
          speedBst:      number,  
          farmingBst:    number,  
          steelingBst:   number,  
          woodingBst:    number,  
          created_at:    Date, 
          power_points:  number,   
        } 
      ): Promise<Stats> {
      
        const {          
          id,     
          attack, 
          defense, 
          hp, 
          sp_attack, 
          sp_defense, 
          speed, 
          farming, 
          steeling, 
          wooding, 
          attackBst, 
          defenseBst, 
          hpBst, 
          sp_attackBst, 
          sp_defenseBst , 
          speedBst, 
          farmingBst, 
          steelingBst, 
          woodingBst, 
          created_at,
          power_points          
        } = requestBody;

      return await this._create.create(
        id,     
        attack, 
        defense, 
        hp, 
        sp_attack, 
        sp_defense, 
        speed, 
        farming, 
        steeling, 
        wooding, 
        attackBst, 
        defenseBst, 
        hpBst, 
        sp_attackBst, 
        sp_defenseBst , 
        speedBst, 
        farmingBst, 
        steelingBst, 
        woodingBst, 
        created_at,
        power_points  
      );
  }

  @Post('/findById')
  public async findById(@Body() requestBody:{id:string}): Promise<Stats | null> {
      const {id} = requestBody;
      return await this._findById.findById(id);
  }


  
 }