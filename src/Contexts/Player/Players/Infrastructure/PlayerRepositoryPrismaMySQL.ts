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
          crystals: player.crystals,
          experience: player.experience,
          level: player.level,
          avatar: player.avatar,
          avatarBlock: player.avatarBlock,
          hasBattlePass: player.hasBattlePass,
          hasYearPass: player.hasYearPass,
          loginDays: player.loginDays,
          lastLogin: player.lastLogin,
          isActive: player.isActive,
          adsViewed: player.adsViewed,
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

  public async playerAlwaysFindById(playerId: string): Promise<Player> {
    return await prisma.players.findUniqueOrThrow({
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

  public async playerUpdateLastLogin(playerId: string, _loginDays: number): Promise<void> {
      await prisma.players.update({
        where: {
          id: playerId,
        },
        data: {
          lastLogin: new Date(),
          loginDays: _loginDays,
        },
      });
  }

  public async playerUpdateAvatar(playerId: string, _avatar: string): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        avatar: _avatar, 
      },
    });
  }

  public async playerUpdateAvatarBlock(playerId: string, _avatarBlock: string): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        avatarBlock: _avatarBlock, 
      },
    });
  }

  public async playerUpdateIds(playerId: string, _googleId: string, _facebookId: string, _appleId: string): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        googleId: _googleId, 
        facebookId: _facebookId, 
        appleId: _appleId
      },
    });
  }

  public async playerUpdateNames(playerId: string, _googleId: string, _facebookId: string, _appleId: string): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        googleId: _googleId, 
        facebookId: _facebookId, 
        appleId: _appleId
      },
    });
  }

  public async playerUpdateMail(playerId: string, _mail: string): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        mail: _mail,
      },
    });
  }

  public async playerAddCoins(playerId: string, _coins: number): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        coins: _coins,
      },
    });
  }

  public async playerAddDiamons(playerId: string, _diamonds: number): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        diamonds: _diamonds,
      },
    });
  }

  public async playerAddCrystals(playerId: string, _crystals: number): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        crystals: _crystals,
      },
    });
  }

  public async playerMinusMoney(playerId: string, _coins:number, _diamonds:number, _crystals:number): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        coins: _coins,
        diamonds: _diamonds,
        crystals: _crystals
      },
    });
  }

  public async playerAddExperience(playerId: string, _experience: number): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        experience: _experience,
      },
    });
  }

  public async playerAddPhrase(playerId: string, _phrase: string): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        phrase: _phrase,
      },
    });
  }

  public async playerAddBattlePass(playerId: string): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        hasBattlePass: true, // Cambia el valor de isActive a false
      },
    });
  }

  public async playerAddYearPass(playerId: string): Promise<void> {
    await prisma.players.update({
      where: {
        id: playerId,
      },
      data: {
        hasYearPass: true, // Cambia el valor de isActive a false
      },
    });
  }
}
