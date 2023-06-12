import { Controller } from "tsoa";
import { Player } from '../../Domain/Player';
export declare class PlayerController extends Controller {
    private readonly _playerService;
    private readonly _playerFindById;
    private readonly _playerDeactivate;
    private readonly _playerUpdateLastLogin;
    private readonly _playerUpdateAvatar;
    private readonly _playerUpdateAvatarBlock;
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
        experience: number;
        level: number;
        avatar: string;
        avatarBlock: string;
        loginDays: number;
        lastLogin: Date;
        isActive: boolean;
        createdAt: Date;
    }): Promise<Player>;
    playerFindById(requestBody: {
        id: string;
    }): Promise<Player | null>;
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
        avatar: string;
    }): Promise<void>;
}
