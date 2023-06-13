import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';
import { Player } from '../Domain/Player';
import { PlayerExperience } from '../Domain/value-object/PlayerExperience';

export class playerAddExperienceUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerAddExperience(playerId: string, _experience: number): Promise<void> {
    const experience = new PlayerExperience(_experience);
    const player: Player | null = await this.playerRepository.playerFindById(playerId);
    if (player) {
      player.experience += experience.getValue();
      await this.playerRepository.playerAddExperience(playerId, player.experience);
    }
  }
}
