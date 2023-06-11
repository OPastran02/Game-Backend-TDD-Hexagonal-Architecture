import { PlayerCreateUseCase } from "../../Application/PlayerCreateUseCase";
import { PlayerFindById } from "../../Application/PlayerFindById";
import { Body, Controller, Post, Route } from "tsoa";
import { PlayerRepositoryPrismaMySQL } from "../PlayerRepositoryPrismaMySQL";
import { Player } from '../../Domain/Player';

@Route('player')
export class PlayerController extends Controller {
  private readonly playerService: PlayerCreateUseCase;
  private readonly playerFindById: PlayerFindById;

  constructor() {
    super();
    var playerRepository = new PlayerRepositoryPrismaMySQL();
    this.playerService = new PlayerCreateUseCase(playerRepository)
    this.playerFindById = new PlayerFindById(playerRepository)
  }

  @Post() 
  public async addPlayer(
    @Body() requestBody: 
        {id:number,googleId: string, facebookId: string, appleId: string, mail: string, nickname: string, firstname: string, lastname: string, phrase: string,
          coins: number, diamonds: number, experience: number, level: number, avatar: string, avatarBlock: string, loginDays: number,lastLogin: Date,
          isActive: boolean, createdAt: Date
        } 
      ): Promise<Player> {
      
        const {id,googleId,facebookId,appleId,mail,nickname,firstname,lastname,phrase,coins,diamonds,experience,
        level, avatar, avatarBlock, loginDays,lastLogin,isActive,createdAt} = requestBody;

      return await this.playerService.addPlayer(id,
        googleId,facebookId,appleId,mail,nickname,firstname,lastname,phrase,coins,diamonds,experience,
        level, avatar, avatarBlock, loginDays,lastLogin,isActive,createdAt
      );
  }

  @Post() 
  public async findPlayerById(@Body() requestBody:{id:number}): Promise<Player | null> {
      const {id} = requestBody;
      return await this.playerFindById.findPlayerById(id);
  }
  
 }