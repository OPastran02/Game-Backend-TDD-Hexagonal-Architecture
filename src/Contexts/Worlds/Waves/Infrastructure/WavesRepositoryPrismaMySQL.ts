import { IWavesRepository } from '../Domain/interfaces/Waves.interface';
import { Waves } from '../Domain/Waves';
import prisma from '../../../../../prisma/index';


export class WavesRepositoryPrismaMySQL implements IWavesRepository {
  

  public async findByMundo(_mundoId: number): Promise<Waves> {
    return await prisma.waves.findFirstOrThrow({
        where: {
          mundoId: _mundoId,
        },
        include: {
          mobs: true,
        },
      });
  }

}
