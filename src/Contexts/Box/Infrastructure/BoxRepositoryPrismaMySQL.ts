import { IBoxRepository } from '../Domain/interfaces/Box.interface';
import { Box } from '../Domain/Box';
import prisma from '../../../../prisma/index';


export class BoxRepositoryPrismaMySQL implements IBoxRepository {
  

  public async findAllBoxes(): Promise<Box[]> {
    return await prisma.boxRatio.findMany({});
  }

}
