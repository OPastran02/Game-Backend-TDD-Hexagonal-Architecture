import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
export declare class PlayerUpdateAvatar {
    private playerRepository;
    constructor(playerRepository: IPlayerRepository);
    playerUpdateAvatar(playerId: string, playerAvatar: string): Promise<void>;
}
