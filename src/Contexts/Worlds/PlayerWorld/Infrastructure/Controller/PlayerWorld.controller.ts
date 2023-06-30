import { FindByPlayerWorld } from "../../Application/FindByPlayerWorld";
import { FindByPlayer } from "../../Application/FindByPlayer";

import { Body, Controller, Post, Route } from "tsoa";
import { PlayerWorldRepositoryPrismaMySQL } from "../PlayerWorldRepositoryPrismaMySQL";
import { PlayerWorld } from '../../Domain/PlayerWorld';


@Route('playerWorld')
export class PlayerWorldController extends Controller {
  private readonly _playerWorld: FindByPlayerWorld;
  private readonly _findByPlayer: FindByPlayer;

  constructor() {
    super();
    var repository = new PlayerWorldRepositoryPrismaMySQL();
    this._playerWorld = new FindByPlayerWorld(repository);
    this._findByPlayer = new FindByPlayer(repository);
  }

  @Post('/findByPlayerWorld')
  public async findByPlayerWorld(@Body() requestBody:{id:string, idn: number}): Promise<PlayerWorld> {
      const {id, idn} = requestBody;
      return await this._playerWorld.findByPlayerWorld(id, idn);
  }

  @Post('/findByPlayer')
  public async findByPlayer(@Body() requestBody:{id:string}): Promise<PlayerWorld[]> {
      const {id} = requestBody;
      return await this._findByPlayer.findByPlayer(id);
  }
  
 }