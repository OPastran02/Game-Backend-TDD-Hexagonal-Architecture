import { IHeroRepository } from '../Domain/interfaces/Hero.interface';

export class ReplaceHeroInGeneralTeam {
  private repository: IHeroRepository;

  constructor(repository: IHeroRepository) {
    this.repository = repository;
  }

  public async replaceHeroInGeneralTeam(id1 : string, order1 : number, id2 : string, order2 : number): Promise<void> {
    return await this.repository.replaceHeroInGeneralTeam(id1,order1,id2,order2);
  }
}

