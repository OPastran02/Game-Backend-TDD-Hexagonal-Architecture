import { Nature } from '../Nature';

export interface INatureRepository {  

    create(type: Nature): Promise<Nature>;

    findById(gameId: number): Promise<Nature>;

}
