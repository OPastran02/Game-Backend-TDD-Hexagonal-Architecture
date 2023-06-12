import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
export declare class PlayerDeactivate {
    private playerRepository;
    constructor(playerRepository: IPlayerRepository);
    playerDeactivate(playerId: string): Promise<void>;
}
