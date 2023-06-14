import { IStatsRepository } from '../Domain/Interfaces/Stats.interfaces';
import { Stats } from '../Domain/Stats';
import prisma from '../../../../../prisma/index';


export class StatsRepositoryPrismaMySQL implements IStatsRepository {
  
  public async create(obj: Stats): Promise<Stats> {
    return await prisma.heroes_stats.create({
        data: {
          id:            obj.id,      
          heroId:        obj.heroId,
          attack:        obj.attack,
          defense:       obj.defense,
          hp:            obj.hp,
          sp_attack:     obj.sp_attack,
          sp_defense:    obj.sp_defense,
          speed:         obj.speed,
          farming:       obj.farming,
          steeling:      obj.steeling,
          wooding:       obj.wooding,
          attackBst:     obj.attackBst,
          defenseBst:    obj.defenseBst,
          hpBst:         obj.hpBst,
          sp_attackBst:  obj.sp_attackBst,
          sp_defenseBst: obj.sp_defenseBst,
          speedBst:      obj.speedBst,
          farmingBst:    obj.farmingBst,
          steelingBst:   obj.steelingBst,
          woodingBst:    obj.woodingBst,
          created_at:    obj.created_at, 
          power_points:  obj.power_points     
        }
    });
  }

  public async findById(_id: number): Promise<Stats | null> {
    return await prisma.heroes_stats.findFirstOrThrow({
        where: {
            id: _id,
        }
      });
  }

}
