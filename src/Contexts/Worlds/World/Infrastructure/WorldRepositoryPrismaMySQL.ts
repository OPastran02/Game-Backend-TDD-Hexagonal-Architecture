import { IWorldRepository } from '../Domain/interfaces/World.interface';
import { World } from '../Domain/world';
import prisma from '../../../../../prisma/index';


export class WorldRepositoryPrismaMySQL implements IWorldRepository {
  

  public async findById(_id: number): Promise<World> {
    return await prisma.world.findFirstOrThrow({
        where: {
          id: _id,
        }
      });
  }

  public async findByRace(_race: number): Promise<World[]> {
    return await prisma.world.findMany({
        where: {
          race: _race,
        }
      });
  }


}
