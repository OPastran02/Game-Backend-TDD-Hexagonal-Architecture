import { Type } from '../Type';

export interface ITypeRepository {  

    createType(type: Type): Promise<Type>;

    findById(gameId: number): Promise<Type | null>;

}
