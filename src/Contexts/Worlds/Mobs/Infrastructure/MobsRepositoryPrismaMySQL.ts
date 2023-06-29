import { IMobsRepository } from '../Domain/interfaces/Mobs.interface';
import { Mobs } from '../Domain/Mobs';
import prisma from '../../../../../prisma/index';


export class MobsRepositoryPrismaMySQL implements IMobsRepository {
  

  public async findByWave(_waveId: number): Promise<Mobs> {
    return await prisma.mobs.findFirstOrThrow({
        where: {
          waveId: _waveId,
        }
      });
  }

}
