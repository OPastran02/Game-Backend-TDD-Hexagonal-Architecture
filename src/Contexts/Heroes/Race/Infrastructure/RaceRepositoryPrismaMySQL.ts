import { IRaceRepository } from '../Domain/interfaces/Race.interface';
import { Race } from '../Domain/Race';
import prisma from '../../../../../prisma/index';


export class RaceRepositoryPrismaMySQL implements IRaceRepository {
  

  public async findById(id: number): Promise<Race> {
    return await prisma.heroes_race.findFirstOrThrow({
        where: {
            id: id,
        }
      });
  }

}
