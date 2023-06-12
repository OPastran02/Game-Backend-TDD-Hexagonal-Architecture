import { PlayerCreateUseCase } from "../../Application/PlayerCreateUseCase";
import { PlayerFindByIdUseCase } from "../../Application/PlayerFindByIdUseCase";
import { PlayerDeactivateUseCase } from "../../Application/PlayerDeactivateUseCase";
import { PlayerUpdateLastLoginUseCase } from "../../Application/PlayerUpdateLastLoginUseCase";
import { PlayerUpdateAvatarUseCase } from "../../Application/PlayerUpdateAvatarUseCaseUseCase";
import { PlayerUpdateAvatarBlockUseCase } from "../../Application/PlayerUpdateAvatarBlockUseCase";
import { PlayerUpdateIdsUseCase } from "../../Application/PlayerUpdateIdsUseCase";
import { PlayerUpdateNamesUseCase } from "../../Application/playerUpdateNamesUseCase";

import { Body, Controller, Post, Route } from "tsoa";
import { PlayerRepositoryPrismaMySQL } from "../PlayerRepositoryPrismaMySQL";
import { Player } from '../../Domain/Player';

@Route('player')
export class PlayerController extends Controller {
  private readonly _playerService: PlayerCreateUseCase;
  private readonly _playerFindById: PlayerFindByIdUseCase;
  private readonly _playerDeactivate: PlayerDeactivateUseCase;
  private readonly _playerUpdateLastLogin: PlayerUpdateLastLoginUseCase;
  private readonly _playerUpdateAvatar: PlayerUpdateAvatarUseCase;
  private readonly _playerUpdateAvatarBlock: PlayerUpdateAvatarBlockUseCase;
  private readonly _playerUpdateIdsUseCase: PlayerUpdateIdsUseCase;
  private readonly _playerUpdateNamesUseCase: PlayerUpdateNamesUseCase;

  constructor() {
    super();
    var playerRepository = new PlayerRepositoryPrismaMySQL();
    this._playerService = new PlayerCreateUseCase(playerRepository)
    this._playerFindById = new PlayerFindByIdUseCase(playerRepository)
    this._playerDeactivate = new PlayerDeactivateUseCase(playerRepository)
    this._playerUpdateLastLogin = new PlayerUpdateLastLoginUseCase(playerRepository)
    this._playerUpdateAvatar = new PlayerUpdateAvatarUseCase(playerRepository)
    this._playerUpdateAvatarBlock = new PlayerUpdateAvatarBlockUseCase(playerRepository)
    this._playerUpdateIdsUseCase = new PlayerUpdateIdsUseCase(playerRepository)
    this._playerUpdateNamesUseCase = new PlayerUpdateNamesUseCase(playerRepository)
  }

  @Post('/add')
  public async addPlayer(
    @Body() requestBody: 
        {id:string,googleId: string, facebookId: string, appleId: string, mail: string, nickname: string, firstname: string, lastname: string, phrase: string,
          coins: number, diamonds: number, experience: number, level: number, avatar: string, avatarBlock: string, loginDays: number,lastLogin: Date,
          isActive: boolean, createdAt: Date, hasBattlePass: boolean, hasYearPass: boolean
        } 
      ): Promise<Player> {
      
        const {id,googleId,facebookId,appleId,mail,nickname,firstname,lastname,phrase,coins,diamonds,experience,
        level, avatar, avatarBlock,hasBattlePass,hasYearPass, loginDays,lastLogin,isActive,createdAt} = requestBody;

      return await this._playerService.addPlayer(id,
        googleId,facebookId,appleId,mail,nickname,firstname,lastname,phrase,coins,diamonds,experience,
        level, avatar, avatarBlock,hasBattlePass,hasYearPass,loginDays,lastLogin,isActive,createdAt
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

  @Post('/updateAvatar')
  public async playerUpdateAvatar(@Body() requestBody:{id:string, avatar: string}): Promise<void> {
      const {id,avatar} = requestBody;
      await this._playerUpdateAvatar.playerUpdateAvatar(id, avatar);
  }

  @Post('/updateAvatarBlock')
  public async playerUpdateAvatarBlock(@Body() requestBody:{id:string, avatar: string}): Promise<void> {
      const {id,avatar} = requestBody;
      await this._playerUpdateAvatarBlock.playerUpdateAvatarBlock(id, avatar);
  }

  
  @Post('/updateIds')
  public async playerUpdateIds(@Body() requestBody:{id:string, googleId: string, facebookId: string, appleId: string}): Promise<void> {
      const {id, googleId, facebookId, appleId} = requestBody;
      await this._playerUpdateIdsUseCase.playerUpdateIds(id, googleId, facebookId, appleId);
  }

  @Post('/updateNames')
  public async playerUpdateNames(@Body() requestBody:{id:string, nickName: string, firstName: string, lastName: string}): Promise<void> {
      const {id, nickName, firstName, lastName} = requestBody;
      await this._playerUpdateNamesUseCase.playerUpdateNames(id, nickName, firstName, lastName);
  }
 }