import { FindByPlayerWorld } from "../../Application/FindByPlayerWorld";

import { Body, Controller, Post, Route } from "tsoa";
import { PlayerWorldRepositoryPrismaMySQL } from "../PlayerWorldRepositoryPrismaMySQL";
import { PlayerWorld } from '../../Domain/PlayerWorld';
import { Player } from "../../../../Player/Players/Domain/Player";

@Route('playerWorld')
export class PlayerWorldController extends Controller {
  private readonly _playerWorld: FindByPlayerWorld;

  constructor() {
    super();
    var repository = new PlayerWorldRepositoryPrismaMySQL();
    this._playerWorld = new FindByPlayerWorld(repository);
  }

  @Post('/findByPlayerWorld')
  public async findByPlayerWorld(@Body() requestBody:{id:Player, idn: number}): Promise<PlayerWorld> {
      const {id, idn} = requestBody;
      return await this._playerWorld.findByPlayerWorld(id, idn);
  }


  
 }