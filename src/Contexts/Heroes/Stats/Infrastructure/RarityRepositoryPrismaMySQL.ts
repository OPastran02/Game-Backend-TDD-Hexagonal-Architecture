import { IRarityRepository } from '../Domain/interfaces/Rarity.interface';
import { Rarity } from '../Domain/Rarity';
import prisma from '../../../../../prisma/index';


export class RarityRepositoryPrismaMySQL implements IRarityRepository {
  
  public async create(rarity: Rarity): Promise<Rarity> {
    return await prisma.heroes_rarity.create({
        data: {
          id: rarity.id,
          name: rarity.name,
          description: rarity.description,
          avatar: rarity.avatar,
          created_at: rarity.created_at,
        }
    });
  }

  public async findById(_id: number): Promise<Rarity | null> {
    return await prisma.heroes_rarity.findFirstOrThrow({
        where: {
            id: _id,
        }
      });
  }

}
