import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import prisma from '../../../../../prisma/index';

export class PlayerRepositoryPrismaMySQL implements IPlayerRepository {
  
  public async addPlayer(player: Player): Promise<Player> {
    return await prisma.players.create({
      data: {
        id: player.id,
        googleId: player.googleId,
        facebookId: player.facebookId,
        appleId: player.appleId,
        mail: player.mail,
        nickname: player.nickname,
        firstname: player.firstname,
        lastname: player.lastname,
        phrase: player.phrase,
        coins: player.coins,
        diamonds: player.diamonds,
        experience: player.experience,
        level: player.level,
        avatar: player.avatar,
        avatarBlock: player.avatarBlock,
        loginDays: player.loginDays,
        lastLogin: player.lastLogin,
        isActive: player.isActive,
        createdAt: player.createdAt
      }
    });
  }

  public async playerFindById(playerId: string): Promise<Player> {
    return await prisma.players.findFirstOrThrow({
      where: {
        id : playerId,
      }
    })
  }

  public async playerDeactivate(playerId: string): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        isActive: false, // Cambia el valor de isActive a false
      },
    });
  }
}
