import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerPhrase } from '../Domain/value-object/PlayerPhrase';

export class playerAddPhraseUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerAddPhrase(playerId: string, _phrase: string): Promise<void> {
    const phrase = new PlayerPhrase(_phrase);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      player.phrase = phrase.getValue();
      await this.playerRepository.playerAddPhrase(playerId, _phrase);
    }
  }
}

