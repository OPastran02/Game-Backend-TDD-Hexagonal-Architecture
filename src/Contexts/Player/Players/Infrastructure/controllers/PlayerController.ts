import { PlayerCreateUseCase } from "../../Application/PlayerCreateUseCase";
import { Body, Controller, Post, Route } from "tsoa";
import { PlayerRepositoryPrismaMySQL } from "../PlayerRepositoryPrismaMySQL";
import { Player } from '../../Domain/Player';

@Route('player')
export class PlayerController extends Controller {
  private readonly playerService: PlayerCreateUseCase;

  constructor() {
    super();
    var playerRepository = new PlayerRepositoryPrismaMySQL();
    this.playerService = new PlayerCreateUseCase(playerRepository)
  }

  @Post() 
  public async addPlayer(
    @Body() requestBody: 
        {
          googleId: string,
          facebookId: string,
          appleId: string,
          mail: string,
          nickname: string,
          firstname: string,
          lastname: string,
          phrase: string,
          coins: number,
          diamonds: number,
          experience: number,
          level: number,
          avatar: string,
          avatarBlock: string,
          loginDays: number,
          lastLogin: Date,
          isActive: boolean,
          createdAt: Date
        } 
      ): Promise<Player> {
      const {        
        googleId,
        facebookId,
        appleId,
        mail,
        nickname,
        firstname,
        lastname,
        phrase,
        coins,
        diamonds,
        experience,
        level,
        avatar,
        avatarBlock,
        loginDays,
        lastLogin,
        isActive,
        createdAt} = requestBody;

      return await this.playerService.addPlayer(
        googleId,
        facebookId,
        appleId,
        mail,
        nickname,
        firstname,
        lastname,
        phrase,
        coins,
        diamonds,
        experience,
        level,
        avatar,
        avatarBlock,
        loginDays,
        lastLogin,
        isActive,
        createdAt
      );
  }
 }