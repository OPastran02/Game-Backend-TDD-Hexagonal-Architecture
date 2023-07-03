import { FindAllBoxes } from "../../Application/FindAllBoxes";

import {Controller, Post, Route } from "tsoa";
import { BoxRepositoryPrismaMySQL } from "../BoxRepositoryPrismaMySQL";
import { Box } from '../../Domain/Box';

@Route('box')
export class BoxController extends Controller {
  private readonly _findAllBoxes: FindAllBoxes;

  constructor() {
    super();
    var raceRepository = new BoxRepositoryPrismaMySQL();
    this._findAllBoxes = new FindAllBoxes(raceRepository);
  }

  @Post('/findAllBoxes')
  public async findAllBoxes(): Promise<Box[]> {
      return await this._findAllBoxes.findAllBoxes();
  }


  
 }