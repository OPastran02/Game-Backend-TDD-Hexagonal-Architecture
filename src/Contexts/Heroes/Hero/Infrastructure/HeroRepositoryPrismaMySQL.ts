import { IHeroRepository } from '../Domain/interfaces/Hero.interface';
import { Hero } from '../Domain/Hero';
import prisma from '../../../../../prisma/index';


export class HeroRepositoryPrismaMySQL implements IHeroRepository {
  
  public async create(obj: Hero): Promise<Hero> {
    return obj;
  }

  public async findById(_id: number): Promise<Hero | null> {
    let heroe: Hero | null = null;

    return heroe;
  }
  
  public async probabilities(_id: number): Promise<number[]> {
    let numeros : number[] = [1,2,3,4];
    return numeros;
  }

  public async IsThereAnyHeroInQueue(_id: string, _queue: boolean): Promise<number> {
    return await prisma.heroes.count({
      where: {
          id: _id,
          isInQueue: _queue
      }
    });
  }
}
