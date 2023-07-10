import { Hero } from '../Hero';

export interface IHeroRepository {  

    create(type: Hero): Promise<Hero>;

    findById(gameId: number): Promise<Hero | null>;

    findByPlayerWorld(Id: string, world: number): Promise<Hero[] | null>;

    findByPlayerTopFive(Id: string): Promise<Hero[] | null>;

    findbyPlayer(id: string): Promise<Hero[] | null>;

    findByRace(race: number, id: string): Promise<Hero[] | null>;

    IsThereAnyHeroInQueue(id: string, inQueue: boolean): Promise<number>;

    probabilities(num: number): Promise<number[]>;

    deleteHeroInQueue(id: string): Promise<void>;

    replaceHeroInGeneralTeam(id1:string, order1:number, id2: string, order2:number): Promise<void>;
}
