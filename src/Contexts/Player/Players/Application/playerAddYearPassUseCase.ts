import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';

export class playerAddYearPassUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playerAddYearPass(playerId: string): Promise<void> {
    await this.playerRepository.playerAddYearPass(playerId);
  }
}

