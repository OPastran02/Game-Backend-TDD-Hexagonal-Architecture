import { ITypeRepository } from '../Domain/interfaces/Type.interface';
import { Type } from '../Domain/Type';

export class CreateType {
  private typeRepository: ITypeRepository;

  constructor(typeRepository: ITypeRepository) {
    this.typeRepository = typeRepository;
  }

  public async createType(    
    _id:number,
    _name: string,
    _horoscope: string,
    _description: string
    ): Promise<Type> {
        const type: Type = new Type(
            _id,
            _name,
            _horoscope,
            _description
          );

          return await this.typeRepository.createType(type);
        }
}

