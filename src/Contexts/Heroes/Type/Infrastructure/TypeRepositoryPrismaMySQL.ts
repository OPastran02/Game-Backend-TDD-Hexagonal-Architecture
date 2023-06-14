import { ITypeRepository } from '../Domain/interfaces/Type.interface';
import { Type } from '../Domain/Type';
import prisma from '../../../../../prisma/index';


export class TypeRepositoryPrismaMySQL implements ITypeRepository {
  
  public async createType(type: Type): Promise<Type> {
    return await prisma.heroes_type.create({
        data: {
          id: type.id,
          name: type.name,
          description: type.description,
        }
    });
  }

  public async findById(playerId: number): Promise<Type | null> {
    return await prisma.heroes_type.findMany({
        where: {
            id: playerId,
        }
      });
  }

}