import { Create } from "../../Application/Create";
import { FindById } from "../../Application/FindById";

import { Body, Controller, Post, Route } from "tsoa";
import { NatureRepositoryPrismaMySQL } from "../NatureRepositoryPrismaMySQL";
import { Nature } from '../../Domain/Nature';

@Route('stats')
export class StatsController extends Controller {
  private readonly _create: Create;
  private readonly _findById: FindById;

  constructor() {
    super();
    var repository = new NatureRepositoryPrismaMySQL();
    this._create = new Create(repository);
    this._findById = new FindById(repository);
  }

  @Post('/add')
  public async create(
    @Body() requestBody: 
        { 
          id:                 number,
          name:               string,
          description:        string,
          boost_attack:       number,  
          boost_defense:      number,  
          boost_hp:           number,  
          boost_sp_attack:    number,  
          boost_sp_defense:   number,  
          boost_speed:        number,  
          boost_farming:      number,  
          boost_steeling:     number,  
          boost_wooding:      number,   
          created_at:         Date
        }  
      ): Promise<Nature> {
      
        const {          
          id,                 
          name,               
          description,        
          boost_attack,         
          boost_defense,        
          boost_hp,             
          boost_sp_attack,      
          boost_sp_defense,     
          boost_speed,          
          boost_farming,        
          boost_steeling,       
          boost_wooding,         
          created_at         
        } = requestBody;

      return await this._create.create(
        id,                 
        name,               
        description,        
        boost_attack,         
        boost_defense,        
        boost_hp,             
        boost_sp_attack,      
        boost_sp_defense,     
        boost_speed,          
        boost_farming,        
        boost_steeling,       
        boost_wooding,         
        created_at 
      );
  }

  @Post('/findById')
  public async findById(@Body() requestBody:{id:number}): Promise<Nature | null> {
      const {id} = requestBody;
      return await this._findById.findById(id);
  }


  
 }