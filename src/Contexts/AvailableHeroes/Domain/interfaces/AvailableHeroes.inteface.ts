import { AvailableHeroes } from '../AvailableHeroes';


export interface IAvailableHeroesRepository {  
    availableHeroFindById(playerId: string): Promise<AvailableHeroes[] | null>; 
}