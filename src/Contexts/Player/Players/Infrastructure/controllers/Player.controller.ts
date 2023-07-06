import { PlayerCreateUseCase } from "../../Application/PlayerCreateUseCase";
import { PlayerFindByIdUseCase } from "../../Application/PlayerFindByIdUseCase";
import { PlayerDeactivateUseCase } from "../../Application/PlayerDeactivateUseCase";
import { PlayerUpdateLastLoginUseCase } from "../../Application/PlayerUpdateLastLoginUseCase";
import { PlayerUpdateAvatarUseCase } from "../../Application/PlayerUpdateAvatarUseCaseUseCase";
import { PlayerUpdateAvatarBlockUseCase } from "../../Application/PlayerUpdateAvatarBlockUseCase";
import { PlayerUpdateIdsUseCase } from "../../Application/PlayerUpdateIdsUseCase";
import { PlayerUpdateNamesUseCase } from "../../Application/PlayerUpdateNamesUseCase";
import { PlayerUpdateMail } from "../../Application/PlayerUpdateMail";
import { PlayerAddCoinsUseCase } from "../../Application/PlayerAddCoinsUseCase";
import { playerAddDiamonsUseCase } from "../../Application/playerAddDiamonsUseCase";
import { PlayerAddCrystalsUseCase } from "../../Application/playerAddCrystalsUseCase";
import { PlayerMinusMoneyUseCase } from "../../Application/PlayerMinusMoneyUseCase";
import { playerAddExperienceUseCase } from "../../Application/playerAddExperienceUseCase";
import { playerAddPhraseUseCase } from "../../Application/playerAddPhraseUseCase";
import { playerAddBattlePassUseCase } from "../../Application/playerAddBattlePassUseCase";
import { playerAddYearPassUseCase } from "../../Application/playerAddYearPassUseCase";
import { PlayerAlwaysFindByIdUseCase } from "../../Application/PlayerAlwaysFindByIdUseCase";



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
  private readonly _playerUpdateMail: PlayerUpdateMail;
  private readonly _playerAddCoinsUseCase: PlayerAddCoinsUseCase;
  private readonly _playerAddDiamonsUseCase: playerAddDiamonsUseCase;
  private readonly _playerAddCrystalsUseCase: PlayerAddCrystalsUseCase;
  private readonly _playerMinusMoneyUseCase: PlayerMinusMoneyUseCase;
  private readonly _playerAddExperienceUseCase: playerAddExperienceUseCase;
  private readonly _playerAddPhraseUseCase: playerAddPhraseUseCase;
  private readonly _playerAddBattlePassUseCase: playerAddBattlePassUseCase;
  private readonly _playerAddYearPassUseCase: playerAddYearPassUseCase;
  private readonly _playerAlwaysFindByIdUseCase: PlayerAlwaysFindByIdUseCase;

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
    this._playerUpdateMail = new PlayerUpdateMail(playerRepository)
    this._playerAddCoinsUseCase = new PlayerAddCoinsUseCase(playerRepository)
    this._playerAddDiamonsUseCase = new playerAddDiamonsUseCase(playerRepository)
    this._playerAddCrystalsUseCase = new PlayerAddCrystalsUseCase(playerRepository)
    this._playerAddExperienceUseCase = new playerAddExperienceUseCase(playerRepository)
    this._playerAddPhraseUseCase = new playerAddPhraseUseCase(playerRepository)
    this._playerAddBattlePassUseCase = new playerAddBattlePassUseCase(playerRepository)
    this._playerAddYearPassUseCase = new playerAddYearPassUseCase(playerRepository)
    this._playerAlwaysFindByIdUseCase = new PlayerAlwaysFindByIdUseCase(playerRepository)
    this._playerMinusMoneyUseCase = new PlayerMinusMoneyUseCase(playerRepository)
  }

  @Post('/add')
  public async addPlayer(
    @Body() requestBody: 
        {id:string,googleId: string, facebookId: string, appleId: string, mail: string, nickname: string, firstname: string, lastname: string, phrase: string,
          coins: number, diamonds: number, crystals:number, experience: number, level: number, avatar: string, avatarBlock: string, loginDays: number,lastLogin: Date,
          isActive: boolean, createdAt: Date, hasBattlePass: boolean, hasYearPass: boolean
        } 
      ): Promise<Player> {
      
        const {id,googleId,facebookId,appleId,mail,nickname,firstname,lastname,phrase,coins,diamonds,crystals,experience,
        level, avatar, avatarBlock,hasBattlePass,hasYearPass, loginDays,lastLogin,isActive,createdAt} = requestBody;

      return await this._playerService.addPlayer(id,
        googleId,facebookId,appleId,mail,nickname,firstname,lastname,phrase,coins,diamonds,crystals,experience,
        level, avatar, avatarBlock,hasBattlePass,hasYearPass,loginDays,lastLogin,isActive,createdAt
      );
  }

  @Post('/findById')
  public async playerFindById(@Body() requestBody:{id:string}): Promise<Player | null> {
      const {id} = requestBody;
      return await this._playerFindById.playerFindById(id);
  }
  
  @Post('/findAlwaysById')
  public async playerAlwaysFindById(@Body() requestBody:{id:string}): Promise<Player> {
      const {id} = requestBody;
      return await this._playerAlwaysFindByIdUseCase.playerAlwaysFindById(id);
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
  public async playerUpdateAvatarBlock(@Body() requestBody:{id:string, avatarBlock: string}): Promise<void> {
      const {id,avatarBlock} = requestBody;
      await this._playerUpdateAvatarBlock.playerUpdateAvatarBlock(id, avatarBlock);
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

  @Post('/updateMail')
  public async playerUpdateMail(@Body() requestBody:{id:string, mail: string}): Promise<void> {
      const {id, mail} = requestBody;
      await this._playerUpdateMail.playerUpdateMail(id, mail);
  }

  @Post('/addCoins')
  public async playerAddCoins(@Body() requestBody:{id:string, coins: number,action: string}): Promise<void> {
      const {id, coins,action} = requestBody;
      await this._playerAddCoinsUseCase.playerAddcoins(id, coins,action);
  }

  @Post('/addDiamonds')
  public async playerAddDiamons(@Body() requestBody:{id:string, diamonds: number,action: string}): Promise<void> {
      const {id, diamonds,action} = requestBody;
      await this._playerAddDiamonsUseCase.playerAddDiamonds(id, diamonds,action);
  }

  @Post('/addCrystals')
  public async playerAddCrystals(@Body() requestBody:{id:string, crystals: number,action: string}): Promise<void> {
      const {id, crystals,action} = requestBody;
      await this._playerAddCrystalsUseCase.playerAddCrystals(id, crystals,action);
  }

  @Post('/playerMinusMoney')
  public async playerMinusMoney(@Body() requestBody:{id:string, coins: number, diamond: number, crystals: number}): Promise<number> {
      const {id,coins,diamond,crystals} = requestBody;
      return await this._playerMinusMoneyUseCase.playerMinusMoney(id,coins,diamond,crystals);
  }

  @Post('/addExperience')
  public async playerAddExperience(@Body() requestBody:{id:string, experience: number}): Promise<void> {
      const {id, experience} = requestBody;
      await this._playerAddExperienceUseCase.playerAddExperience(id, experience);
  }

  @Post('/addPhrase')
  public async playerAddPhrase(@Body() requestBody:{id:string, phrase: string}): Promise<void> {
      const {id, phrase} = requestBody;
      await this._playerAddPhraseUseCase.playerAddPhrase(id, phrase);
  }

  @Post('/addBattlePass')
  public async playerAddBattlePass(@Body() requestBody:{id:string}): Promise<void> {
      const {id} = requestBody;
      await this._playerAddBattlePassUseCase.playeraddBatlePass(id);
  }

  @Post('/addYearPass')
  public async playerYearPass(@Body() requestBody:{id:string}): Promise<void> {
      const {id} = requestBody;
      await this._playerAddYearPassUseCase.playerAddYearPass(id);
  }
 }