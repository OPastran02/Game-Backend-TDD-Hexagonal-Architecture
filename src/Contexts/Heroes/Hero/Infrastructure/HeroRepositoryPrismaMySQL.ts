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

  public async findByPlayerTopFive(_id: string): Promise<Hero[] | null> {
    const heroes = await prisma.heroes.findMany({
      where: {
        playerId: _id,
        orderInGeneralTeam: {
          in: [1, 2, 3, 4, 5]
        }
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
  
  public async findbyPlayer(_id: string): Promise<Hero[] | null> {
    const heroes = await prisma.heroes.findMany({
      where: {
        playerId: _id,
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

  public async findByPlayerWorld(_id: string, _world: number): Promise<Hero[] | null> {
    const heroes = await prisma.heroes.findMany({
      where: {
        playerId: _id,
        raceId: _world
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

  public async replaceHeroInGeneralTeam(id1 : string, order1 : number, id2 : string, order2 : number): Promise<void> {
    await prisma.heroes.update({
      data: {
        orderInGeneralTeam: order1
      },
      where: {
        id: id1
      }
    });

    await prisma.heroes.update({
      data: {
        orderInGeneralTeam: order2
      },
      where: {
        id: id2
      }
    });
  }

}
