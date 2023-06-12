import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
export declare class PlayerUpdateLastLogin {
    private playerRepository;
    constructor(playerRepository: IPlayerRepository);
    playerUpdateLastLogin(playerId: string): Promise<void>;
}
