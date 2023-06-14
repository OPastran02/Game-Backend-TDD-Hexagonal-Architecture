import { Create } from "../../Application/Create";
import { FindById } from "../../Application/FindById";

import { Body, Controller, Post, Route } from "tsoa";
import { RarityRepositoryPrismaMySQL } from "../RarityRepositoryPrismaMySQL";
import { Rarity } from '../../Domain/Rarity';

@Route('rarity')
export class RarityController extends Controller {
  private readonly _create: Create;
  private readonly _findById: FindById;

  constructor() {
    super();
    var rarityRepository = new RarityRepositoryPrismaMySQL();
    this._create = new Create(rarityRepository);
    this._findById = new FindById(rarityRepository);
  }

  @Post('/add')
  public async create(
    @Body() requestBody: 
        { id: number;
          name: string;
          description: string;
          avatar: string;
          created_at: Date; 
        }  
      ): Promise<Rarity> {
      
        const {id, name, description,avatar,created_at} = requestBody;

      return await this._create.create(id, name, description,avatar,created_at);
  }

  @Post('/findById')
  public async findById(@Body() requestBody:{id:number}): Promise<Rarity | null> {
      const {id} = requestBody;
      return await this._findById.findById(id);
  }


  
 }