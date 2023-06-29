import { IRewardRepository } from '../Domain/interfaces/Reward.interface';
import { Reward } from '../Domain/Reward';
import prisma from '../../../../../prisma/index';


export class RewardRepositoryPrismaMySQL implements IRewardRepository {
  

  public async findByMundo(_mundoId: number): Promise<Reward> {
    return await prisma.reward.findFirstOrThrow({
        where: {
          mundoId: _mundoId,
        }
      });
  }

}
