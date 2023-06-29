import { IWavesRepository } from '../Domain/interfaces/Waves.interface';
import { Waves } from '../Domain/Waves';

export class FindByMundo {
  private repository: IWavesRepository;

  constructor(repository: IWavesRepository) {
    this.repository = repository;
  }

  public async findByMundo(id: number): Promise<Waves> {
    return await this.repository.findByMundo(id);
  }
}

