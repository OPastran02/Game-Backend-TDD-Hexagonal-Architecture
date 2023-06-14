import { Hero } from '../Hero';

export interface IHeroRepository {  

    create(type: Hero): Promise<Hero>;

    findById(gameId: number): Promise<Hero | null>;

}
