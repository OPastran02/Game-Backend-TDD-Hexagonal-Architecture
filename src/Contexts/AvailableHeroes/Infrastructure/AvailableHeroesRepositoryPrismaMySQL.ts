import { IAvailableHeroesRepository } from '../Domain/interfaces/AvailableHeroes.inteface';
import { AvailableHeroes } from '../Domain/AvailableHeroes';
import prisma from '../../../../prisma/index';


export class AvailableHeroesRepositoryPrismaMySQL implements IAvailableHeroesRepository {

  public async availableHeroFindById(playerId: string): Promise<AvailableHeroes> {
    return await prisma.availableHeroes.findUnique({
      where: {
        id : playerId,
      }
    })
  }
}
