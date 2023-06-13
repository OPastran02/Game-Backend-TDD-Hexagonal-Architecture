import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerGoogleId } from '../Domain/value-object/PlayerGoogleId';
import { PlayerFacebookId } from '../Domain/value-object/PlayerFacebookId';
import { PlayerAppleId } from '../Domain/value-object/PlayerAppleId';



export class PlayerUpdateIdsUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerUpdateIds(playerId: string, _googleId: string, _facebookId: string, _appleId: string): Promise<void> {
    const googleId = new PlayerGoogleId(_googleId);
    const facebookId = new PlayerFacebookId(_facebookId);
    const appleId = new PlayerAppleId(_appleId);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      player.googleId = (googleId.getValue() == null || googleId.getValue() == "") ? player.googleId : googleId.getValue();
      player.facebookId = (facebookId.getValue() == null || facebookId.getValue() == "") ? player.facebookId : facebookId.getValue();
      player.appleId = (appleId.getValue() == null)  || appleId.getValue() == "" ? player.appleId : appleId.getValue();
      await this.playerRepository.playerUpdateIds(playerId, player.googleId, player.facebookId, player.appleId);
    }
  }
}

