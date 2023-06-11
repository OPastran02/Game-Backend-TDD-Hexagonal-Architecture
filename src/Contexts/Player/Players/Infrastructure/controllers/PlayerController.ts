import { PlayerCreateUseCase } from "../../Application/PlayerCreateUseCase";
import { Body, Controller, Post, Route } from "tsoa";
import { PlayerRepositoryPrismaMySQL } from "../PlayerRepositoryPrismaMySQL";
import { Player } from '../../Domain/Player';
import { PlayerId } from "src/Contexts/Player/Shared/Domain/Courses/PlayerId";
import { PlayerGoogleId } from "../../Domain/value-object/PlayerGoogleId";
import { PlayerFacebookId } from "../../Domain/value-object/PlayerFacebookId";
import { PlayerAppleId } from "../../Domain/value-object/PlayerAppleId";
import { PlayerAvatar } from "../../Domain/value-object/PlayerAvatar";
import { PlayerAvatarBlock } from "../../Domain/value-object/PlayerAvatarBlock";
import { PlayerCoins } from "../../Domain/value-object/PlayerCoins";
import { PlayerCreatedAt } from "../../Domain/value-object/PlayerCreatedAt";
import { PlayerDiamonds } from "../../Domain/value-object/PlayerDiamonds";
import { PlayerExperience } from "../../Domain/value-object/PlayerExperience";
import { PlayerFirstName } from "../../Domain/value-object/PlayerFirstName";
import { PlayerIsActive } from "../../Domain/value-object/PlayerIsActive";
import { PlayerLastLogin } from "../../Domain/value-object/PlayerLastLogin";
import { PlayerLastName } from "../../Domain/value-object/PlayerLastName";
import { PlayerLevel } from "../../Domain/value-object/PlayerLevel";
import { PlayerLoginDays } from "../../Domain/value-object/PlayerLoginDays";
import { PlayerMail } from "../../Domain/value-object/PlayerMail";
import { PlayerNickname } from "../../Domain/value-object/PlayerNickname";
import { PlayerPhrase } from "../../Domain/value-object/PlayerPhrase";

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
          id: PlayerId,
          id_google: PlayerGoogleId,
          id_facebook: PlayerFacebookId,
          id_apple: PlayerAppleId,
          mail: PlayerMail,
          nickname: PlayerNickname,
          firstname: PlayerFirstName,
          lastname: PlayerLastName,
          phrase: PlayerPhrase,
          coins: PlayerCoins,
          diamonds: PlayerDiamonds,
          experience: PlayerExperience,
          level: PlayerLevel,
          avatar: PlayerAvatar,
          block_avatar: PlayerAvatarBlock,
          loginDays: PlayerLoginDays,
          last_login: PlayerLastLogin,
          is_active: PlayerIsActive,
          created_at: PlayerCreatedAt
        } 
      ): Promise<Player> {
      const {        
        id,
        id_google,
        id_facebook,
        id_apple,
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
        block_avatar,
        loginDays,
        last_login,
        is_active,
        created_at} = requestBody;
        
      return await this.playerService.addPlayer(
        id,
        id_google,
        id_facebook,
        id_apple,
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
        block_avatar,
        loginDays,
        last_login,
        is_active,
        created_at
      );
  }
 }