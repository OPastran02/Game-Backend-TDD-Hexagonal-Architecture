import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
export declare class PlayerCreateUseCase {
    private playerRepository;
    constructor(playerRepository: IPlayerRepository);
    addPlayer(_id: string, _googleId: string | null, _facebookId: string | null, _appleId: string | null, _mail: string, _nickname: string | null, _firstname: string | null, _lastname: string | null, _phrase: string | null, _coins: number, _diamonds: number, _experience: number, _level: number, _avatar: string, _avatarBlock: string, _loginDays: number, _lastLogin: Date, _isActive: boolean, _createdAt: Date): Promise<Player>;
}
