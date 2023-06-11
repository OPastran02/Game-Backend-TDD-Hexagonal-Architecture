import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import prisma from '../../../../../prisma/index';

export class PlayerRepositoryPrismaMySQL implements IPlayerRepository {
  
  public async addPlayer(player: Player): Promise<Player> {
    return await prisma.players.create({
      data: {
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

  public async findPlayerById(playerId: number): Promise<Player> {
    return await prisma.players.findFirstOrThrow({
      where: {
        id : playerId,
      }
    })
  }
}
