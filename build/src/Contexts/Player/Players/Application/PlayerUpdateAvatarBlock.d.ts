import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
export declare class PlayerUpdateAvatarBlock {
    private playerRepository;
    constructor(playerRepository: IPlayerRepository);
    playerUpdateAvatarBlock(playerId: string, playerAvatar: string): Promise<void>;
}
