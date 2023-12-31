import { CreateType } from "../../Application/CreateType";
import { FindById } from "../../Application/FindById";

import { Body, Controller, Post, Route } from "tsoa";
import { TypeRepositoryPrismaMySQL } from "../TypeRepositoryPrismaMySQL";
import { Type } from '../../Domain/Type';

@Route('type')
export class TypeController extends Controller {
  private readonly _createType: CreateType;
  private readonly _findById: FindById;

  constructor() {
    super();
    var typeRepository = new TypeRepositoryPrismaMySQL();
    this._createType = new CreateType(typeRepository);
    this._findById = new FindById(typeRepository);
  }

  @Post('/add')
  public async createType(
    @Body() requestBody: 
        { id: number;
          name: string;
          horoscope: string;
          avatar: string;
          description: string;} 
      ): Promise<Type> {
      
        const {id, name, horoscope, avatar, description} = requestBody;

      return await this._createType.createType(id, name, horoscope, avatar, description);
  }

  @Post('/findById')
  public async findById(@Body() requestBody:{id:number}): Promise<Type> {
      const {id} = requestBody;
      return await this._findById.findById(id);
  }


  
 }