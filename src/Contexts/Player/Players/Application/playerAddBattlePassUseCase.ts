import { IPlayerRepository } from '../Domain/Interfaces/Player.interface';

export class playerAddBattlePassUseCase {
  private playerRepository: IPlayerRepository;

  constructor(playerRepository: IPlayerRepository) {
    this.playerRepository = playerRepository;
  }

  public async playeraddBatlePass(playerId: string): Promise<void> {
    await this.playerRepository.playerAddBattlePass(playerId);
  }
}

