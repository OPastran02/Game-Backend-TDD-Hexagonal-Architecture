import { PlayerCreateUseCase } from "../../Application/PlayerCreateUseCase";
import { PlayerFindById } from "../../Application/PlayerFindById";
import { PlayerDeactivate } from "../../Application/PlayerDeactivate";
import { PlayerUpdateLastLogin } from "../../Application/PlayerUpdateLastLogin";
import { Body, Controller, Post, Route } from "tsoa";
import { PlayerRepositoryPrismaMySQL } from "../PlayerRepositoryPrismaMySQL";
import { Player } from '../../Domain/Player';

@Route('player')
export class PlayerController extends Controller {
  private readonly _playerService: PlayerCreateUseCase;
  private readonly _playerFindById: PlayerFindById;
  private readonly _playerDeactivate: PlayerDeactivate;
  private readonly _playerUpdateLastLogin: PlayerUpdateLastLogin;

  constructor() {
    super();
    var playerRepository = new PlayerRepositoryPrismaMySQL();
    this._playerService = new PlayerCreateUseCase(playerRepository)
    this._playerFindById = new PlayerFindById(playerRepository)
    this._playerDeactivate = new PlayerDeactivate(playerRepository)
    this._playerUpdateLastLogin = new PlayerUpdateLastLogin(playerRepository)
  }

  @Post('/add')
  public async addPlayer(
    @Body() requestBody: 
        {id:string,googleId: string, facebookId: string, appleId: string, mail: string, nickname: string, firstname: string, lastname: string, phrase: string,
          coins: number, diamonds: number, experience: number, level: number, avatar: string, avatarBlock: string, loginDays: number,lastLogin: Date,
          isActive: boolean, createdAt: Date
        } 
      ): Promise<Player> {
      
        const {id,googleId,facebookId,appleId,mail,nickname,firstname,lastname,phrase,coins,diamonds,experience,
        level, avatar, avatarBlock, loginDays,lastLogin,isActive,createdAt} = requestBody;

      return await this._playerService.addPlayer(id,
        googleId,facebookId,appleId,mail,nickname,firstname,lastname,phrase,coins,diamonds,experience,
        level, avatar, avatarBlock, loginDays,lastLogin,isActive,createdAt
      );
  }

  @Post('/findById')
  public async playerFindById(@Body() requestBody:{id:string}): Promise<Player | null> {
      const {id} = requestBody;
      return await this._playerFindById.playerFindById(id);
  }
  

  @Post('/deactivate')
  public async playerDeactivate(@Body() requestBody:{id:string}): Promise<void> {
      const {id} = requestBody;
      await this._playerDeactivate.playerDeactivate(id);
  }

  @Post('/updateLastLogin')
  public async playerUpdateLastLogin(@Body() requestBody:{id:string}): Promise<void> {
      const {id} = requestBody;
      await this._playerUpdateLastLogin.playerUpdateLastLogin(id);
  }
 }