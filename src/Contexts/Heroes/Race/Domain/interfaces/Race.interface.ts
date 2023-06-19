import { Race } from '../Race';

export interface IRaceRepository {  

    findById(id: number): Promise<Race>;

}
