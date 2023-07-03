import { IBoxRepository } from '../Domain/interfaces/Box.interface';
import { Box } from '../Domain/Box';

export class FindAllBoxes {
  private repository: IBoxRepository;

  constructor(repository: IBoxRepository) {
    this.repository = repository;
  }

  public async findAllBoxes(): Promise<Box[]> {
    return await this.repository.findAllBoxes();
  }
}

