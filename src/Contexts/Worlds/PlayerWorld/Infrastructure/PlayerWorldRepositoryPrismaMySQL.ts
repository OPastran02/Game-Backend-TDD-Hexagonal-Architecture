import { IPlayerWorldRepository } from '../Domain/interfaces/PlayerWorld.interface';
import { PlayerWorld } from '../Domain/PlayerWorld';
import prisma from '../../../../../prisma/index';
import { Player } from "../../../Player/Players/Domain/Player";

export class PlayerWorldRepositoryPrismaMySQL implements IPlayerWorldRepository {
  

  public async findByPlayerWorld(_idPlayer: Player, _idWorld:number): Promise<PlayerWorld> {
    return await prisma.playerWorld.findFirstOrThrow({
        where: {
          idPlayer: _idPlayer.id,
          idWorld: _idWorld
        },
        include: {
          player: true,
        },
      });
  }

}
