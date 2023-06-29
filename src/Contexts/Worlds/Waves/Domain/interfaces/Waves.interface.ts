import { Waves } from '../Waves';

export interface IWavesRepository {  
    findByMundo(wave: number): Promise<Waves>;
}
