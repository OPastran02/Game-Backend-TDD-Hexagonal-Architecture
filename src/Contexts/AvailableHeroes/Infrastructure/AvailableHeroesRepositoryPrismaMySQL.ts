import { IAvailableHeroesRepository } from '../Domain/interfaces/AvailableHeroes.inteface';
import { AvailableHeroes } from '../Domain/AvailableHeroes';
import prisma from '../../../../prisma/index';


export class AvailableHeroesRepositoryPrismaMySQL implements IAvailableHeroesRepository {

  public async availableHeroFindById(id: number): Promise<AvailableHeroes> {
    return await prisma.availableHeroes.findFirstOrThrow({
      where: {
        id : id,
      }
    })
  }

  public async availableHeroFindByRarity(id: number): Promise<AvailableHeroes[]> {
    return await prisma.availableHeroes.findMany({
      where: {
        rarityId : id,
      }
    })
  }
}
