import { Hero } from '../Hero';

export interface IHeroRepository {  

    create(type: Hero): Promise<Hero>;

    findById(gameId: number): Promise<Hero | null>;

    findByPlayerWorld(Id: string, world: number): Promise<Hero[] | null>;

    findByPlayerTopFive(Id: string): Promise<Hero[] | null>;

    findByRace(race: number, id: string): Promise<Hero[] | null>;

    IsThereAnyHeroInQueue(id: string, inQueue: boolean): Promise<number>;

    probabilities(num: number): Promise<number[]>;

    deleteHeroInQueue(id: string): Promise<void>;
}
