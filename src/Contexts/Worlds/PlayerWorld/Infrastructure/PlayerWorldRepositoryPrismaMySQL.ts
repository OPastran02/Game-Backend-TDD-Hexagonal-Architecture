import { IPlayerWorldRepository } from '../Domain/interfaces/PlayerWorld.interface';
import { PlayerWorld } from '../Domain/PlayerWorld';
import prisma from '../../../../../prisma/index';

export class PlayerWorldRepositoryPrismaMySQL implements IPlayerWorldRepository {
  

  public async findByPlayerWorld(_idPlayer: string, _idWorld:number): Promise<PlayerWorld> {
    return await prisma.playerWorld.findFirstOrThrow({
        where: {
          idPlayer: _idPlayer,
          idWorld: _idWorld
        }
      });
  }

  public async findByPlayer(_idPlayer: string): Promise<PlayerWorld[]> {
    return await prisma.playerWorld.findMany({
        where: {
          idPlayer: _idPlayer
        }
      });
  }

}
