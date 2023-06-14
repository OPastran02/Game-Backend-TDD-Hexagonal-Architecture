import { Rarity } from '../Rarity';

export interface IRarityRepository {  

    create(type: Rarity): Promise<Rarity>;

    findById(gameId: number): Promise<Rarity | null>;

}
