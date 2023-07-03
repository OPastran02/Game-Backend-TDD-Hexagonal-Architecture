import { Box } from '../Box';

export interface IBoxRepository {  

    findAllBoxes(): Promise<Box[]>;

}
