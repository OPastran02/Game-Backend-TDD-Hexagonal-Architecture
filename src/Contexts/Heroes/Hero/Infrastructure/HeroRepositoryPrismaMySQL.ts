import { IHeroRepository } from '../Domain/interfaces/Hero.interface';
import { Hero } from '../Domain/Hero';
import prisma from '../../../../../prisma/index';


export class HeroRepositoryPrismaMySQL implements IHeroRepository {
  
  public async create(obj: Hero): Promise<Hero> { 

    const createdHero = await prisma.heroes.create({
      data: {
        id: obj.id,
        level: obj.level,
        idAvailableHero: obj.idAvailableHero,
        Experience: obj.Experience,
        id_placement: obj.id_placement,
        name: obj.name,
        description: obj.description,  
        avatar: obj.avatar,  
        created_at: obj.created_at,  
        rarity: { connect: { id: obj.rarity.id }},
        nature: { connect: { id: obj.nature.id } },
        type: { connect: { id: obj.type.id } },
        stats: {
          connectOrCreate: {
            where: { id: obj.stats.id },
            create: {...obj.stats }
          }
        },
        race: { connect: { id: obj.race.id } },
        players: { connect: { id: obj.playerId } },
        orderInGeneralTeam: obj.orderInGeneralTeam,   
        orderInRaceTeam: obj.orderInRaceTeam,
        isInQueue: obj.isInQueue,
      },
      include: {
        rarity: true,
        nature: true,
        type: true,
        stats: true,
        race: true,
      }
    });
  
    return createdHero;
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
          playerId: _id,
          isInQueue: _queue
      }
    });
  }

  public async findByRace(race: number, _id: string): Promise<Hero[] | null> {
    const heroes = await prisma.heroes.findMany({
      where: {
        raceId: race,
        playerId: _id
      },
      include: {
        nature: true,
        rarity: true,
        type: true,
        stats: true,
        race: true,
      },
    });
  
    return heroes;
  }

  public async deleteHeroInQueue(_id: string): Promise<void> {
    await prisma.heroes.deleteMany({
      where: {
        playerId: _id,
        isInQueue: true
      }
    });
  }

}
