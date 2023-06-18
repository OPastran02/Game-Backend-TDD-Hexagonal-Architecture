import { AvailableHeroes } from '../AvailableHeroes';


export interface IAvailableHeroesRepository {  
    availableHeroFindById(id: number): Promise<AvailableHeroes>; 
}