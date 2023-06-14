import { ITypeRepository } from '../Domain/interfaces/Type.interface';
import { Type } from '../Domain/Type';

export class FindById {
  private typeRepository: ITypeRepository;

  constructor(typeRepository: ITypeRepository) {
    this.typeRepository = typeRepository;
  }

  public async findById(id: number): Promise<Type | null> {
    return await this.typeRepository.findById(id);
  }
}

