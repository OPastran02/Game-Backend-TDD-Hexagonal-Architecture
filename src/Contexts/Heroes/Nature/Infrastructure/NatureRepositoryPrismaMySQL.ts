import { INatureRepository } from '../Domain/interfaces/Nature.interface';
import { Nature } from '../Domain/Nature';
import prisma from '../../../../../prisma/index';


export class NatureRepositoryPrismaMySQL implements INatureRepository {
  
  public async create(obj: Nature): Promise<Nature> {
    return await prisma.heroes_nature.create({
        data: {
          id:                 obj.id,
          name:               obj.name,
          description:        obj.description,
          boost_attack:       obj.boost_attack,  
          boost_defense:      obj.boost_defense,  
          boost_hp:           obj.boost_hp,  
          boost_sp_attack:    obj.boost_sp_attack,  
          boost_sp_defense:   obj.boost_sp_defense,  
          boost_speed:        obj.boost_speed,  
          boost_farming:      obj.boost_farming,  
          boost_steeling:     obj.boost_steeling,  
          boost_wooding:      obj.boost_wooding,   
          created_at:         obj.created_at
        }
    });
  }

  public async findById(_id: number): Promise<Nature | null> {
    return await prisma.heroes_nature.findFirstOrThrow({
        where: {
            id: _id,
        }
      });
  }

}
