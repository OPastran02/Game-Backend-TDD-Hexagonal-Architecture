import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import prisma from '../../../../../prisma/index';

export class PlayerRepositoryPrismaMySQL implements IPlayerRepository {
  
  public async addPlayer(player: Player): Promise<Player> {
    return await prisma.players.create({
      data: {
        id_google:        player.googleId,
        id_facebook:      player.facebookId,
        id_apple:         player.appleId,
        mail:             player.mail,
        nickname:         player.nickname,
        firstname:        player.firstname,
        lastname:         player.lastname,
        phrase:           player.phrase,
        coins:            player.coins,      
        diamonds:         player.diamonds,            
        experience:       player.experience,             
        level:            player.level,              
        avatar:           player.avatar,          
        block_avatar:     player.avatarBlock,           
        loginDays:        player.loginDays,               
        last_login:       player.lastLogin,          
        is_active:        player.isActive,          
        created_at:       player.createdAt         
      }
    })
  }
}

