import { AvailableHeroes } from '../AvailableHeroes';


export interface IAvailableHeroesRepository {  
    availableHeroFindById(id: number): Promise<AvailableHeroes>; 

    availableHeroFindByRarity(id: number): Promise<AvailableHeroes[]>; 
}