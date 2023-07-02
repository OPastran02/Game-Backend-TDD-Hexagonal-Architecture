import { Controller } from "tsoa";
import { Player } from '../../Domain/Player';
export declare class PlayerController extends Controller {
    private readonly _playerService;
    private readonly _playerFindById;
    private readonly _playerDeactivate;
    private readonly _playerUpdateLastLogin;
    private readonly _playerUpdateAvatar;
    private readonly _playerUpdateAvatarBlock;
    private readonly _playerUpdateIdsUseCase;
    private readonly _playerUpdateNamesUseCase;
    private readonly _playerUpdateMail;
    private readonly _playerAddCoinsUseCase;
    private readonly _playerAddDiamonsUseCase;
    private readonly _playerAddCrystalsUseCase;
    private readonly _playerMinusMoneyUseCase;
    private readonly _playerAddExperienceUseCase;
    private readonly _playerAddPhraseUseCase;
    private readonly _playerAddBattlePassUseCase;
    private readonly _playerAddYearPassUseCase;
    private readonly _playerAlwaysFindByIdUseCase;
    constructor();
    addPlayer(requestBody: {
        id: string;
        googleId: string;
        facebookId: string;
        appleId: string;
        mail: string;
        nickname: string;
        firstname: string;
        lastname: string;
        phrase: string;
        coins: number;
        diamonds: number;
        crystals: number;
        experience: number;
        level: number;
        avatar: string;
        avatarBlock: string;
        loginDays: number;
        lastLogin: Date;
        isActive: boolean;
        createdAt: Date;
        hasBattlePass: boolean;
        hasYearPass: boolean;
    }): Promise<Player>;
    playerFindById(requestBody: {
        id: string;
    }): Promise<Player | null>;
    playerAlwaysFindById(requestBody: {
        id: string;
    }): Promise<Player>;
    playerDeactivate(requestBody: {
        id: string;
    }): Promise<void>;
    playerUpdateLastLogin(requestBody: {
        id: string;
    }): Promise<void>;
    playerUpdateAvatar(requestBody: {
        id: string;
        avatar: string;
    }): Promise<void>;
    playerUpdateAvatarBlock(requestBody: {
        id: string;
        avatarBlock: string;
    }): Promise<void>;
    playerUpdateIds(requestBody: {
        id: string;
        googleId: string;
        facebookId: string;
        appleId: string;
    }): Promise<void>;
    playerUpdateNames(requestBody: {
        id: string;
        nickName: string;
        firstName: string;
        lastName: string;
    }): Promise<void>;
    playerUpdateMail(requestBody: {
        id: string;
        mail: string;
    }): Promise<void>;
    playerAddCoins(requestBody: {
        id: string;
        coins: number;
    }): Promise<void>;
    playerAddDiamons(requestBody: {
        id: string;
        diamonds: number;
    }): Promise<void>;
    playerAddCrystals(requestBody: {
        id: string;
        crystals: number;
    }): Promise<void>;
    playerMinusMoney(requestBody: {
        id: string;
        coins: number;
        diamond: number;
        crystals: number;
    }): Promise<void>;
    playerAddExperience(requestBody: {
        id: string;
        experience: number;
    }): Promise<void>;
    playerAddPhrase(requestBody: {
        id: string;
        phrase: string;
    }): Promise<void>;
    playerAddBattlePass(requestBody: {
        id: string;
    }): Promise<void>;
    playerYearPass(requestBody: {
        id: string;
    }): Promise<void>;
}
