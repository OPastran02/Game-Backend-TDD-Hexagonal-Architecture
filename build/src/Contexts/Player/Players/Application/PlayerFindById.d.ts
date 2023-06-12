import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
export declare class PlayerFindById {
    private playerRepository;
    constructor(playerRepository: IPlayerRepository);
    playerFindById(id: string): Promise<Player | null>;
}
