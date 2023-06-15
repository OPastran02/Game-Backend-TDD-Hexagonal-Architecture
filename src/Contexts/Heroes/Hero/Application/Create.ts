import { IHeroRepository } from '../Domain/interfaces/Hero.interface';
import { Hero } from '../Domain/Hero';
import { Player } from '../../../Player/Players/Domain/Player';
import { Rarity } from '../../Rarity/Domain/Rarity';
import { Nature } from '../../Nature/Domain/Nature';
import { Type } from '../../Type/Domain/Type';
import { Stats } from '../../Stats/Domain/Stats';

import { AvailableHeroes } from 'src/Contexts/AvailableHeroes/Domain/AvailableHeroes';
import { IAvailableHeroesRepository } from '../../../AvailableHeroes/Domain/interfaces/AvailableHeroes.inteface';
import { ITypeRepository } from '../../Type/Domain/interfaces/Type.interface';
import { IRarityRepository } from '../../Rarity/Domain/interfaces/Rarity.interface';
import { INatureRepository } from '../../Nature/Domain/interfaces/Nature.interface';

import { LootboxGenerator } from './LootBoxGenerator';

import { v4 as uuidv4 } from 'uuid';

export class Create {
  private repository: IHeroRepository;
  private heroesAvailablesRepository: IAvailableHeroesRepository;
  private typeRepository: ITypeRepository;
  private rarityRepository: IRarityRepository;
  private natureRepository: INatureRepository;
  private lootBoxGenerator: LootboxGenerator;

  constructor(repository: IHeroRepository, 
    heroesAvailablesRepository: IAvailableHeroesRepository,
    typeRepository: ITypeRepository,
    rarityRepository: IRarityRepository,
    natureRepository: INatureRepository,
    lootBoxGenerator: LootboxGenerator) {
    this.repository = repository;
    this.heroesAvailablesRepository = heroesAvailablesRepository;
    this.typeRepository = typeRepository;
    this.rarityRepository = rarityRepository;
    this.natureRepository = natureRepository;
    this.lootBoxGenerator = lootBoxGenerator;
  }

  public async create(    
      _id:string,         
      _name:string,          
      _description:string,
      _world:string,
      _avatar:string,
      _created_at:Date,
      _player:Player,
    ): Promise<Hero> {

      const IdHero = uuidv4(); // Generar un UUID si no se proporciona un ID
      
      const arrProbabilities = this.lootBoxGenerator.calculateTierProbabilitiesForLevel(_player.level);

      console.log(arrProbabilities);
      
      const _availableHeroes: AvailableHeroes = await this.heroesAvailablesRepository.availableHeroFindById("hola");
       
      const stats : Stats = new Stats(
        0,
        IdHero,
        getRandom(_availableHeroes.attackMin,_availableHeroes.attackMax),
        getRandom(_availableHeroes.defenseMin,_availableHeroes.defenseMax),
        getRandom(_availableHeroes.hpMin,_availableHeroes.hpMax),
        getRandom(_availableHeroes.sp_attackMin,_availableHeroes.sp_attackMax),
        getRandom(_availableHeroes.sp_defenseMin,_availableHeroes.sp_defenseMax),
        getRandom(_availableHeroes.speedMin,_availableHeroes.speedMax),
        getRandom(_availableHeroes.farmingMin,_availableHeroes.farmingMax),
        getRandom(_availableHeroes.steelingMin,_availableHeroes.steelingMax),
        getRandom(_availableHeroes.woodingMin,_availableHeroes.woodingMax),
        getRandom(_availableHeroes.attackBstMin,_availableHeroes.attackBstMax),
        getRandom(_availableHeroes.defenseBstMin,_availableHeroes.defenseBstMax),
        getRandom(_availableHeroes.hpBstMin,_availableHeroes.hpBstMax),
        getRandom(_availableHeroes.sp_attackBstMin,_availableHeroes.sp_attackBstMax),
        getRandom(_availableHeroes.sp_defenseBstMin,_availableHeroes.sp_defenseBstMax),
        getRandom(_availableHeroes.speedBstMin,_availableHeroes.speedBstMax),
        getRandom(_availableHeroes.farmingBstMin,_availableHeroes.farmingBstMax),
        getRandom(_availableHeroes.steelingBstMin,_availableHeroes.steelingBstMax),
        getRandom(_availableHeroes.woodingBstMin,_availableHeroes.woodingBstMax),
        new Date(Date.now()),
        getRandom(_availableHeroes.hpMin,_availableHeroes.hpMax),
      );

      const type : Type = await this.typeRepository.findById(_availableHeroes.typeId);
      const rarity : Rarity = await this.rarityRepository.findById(_availableHeroes.rarityId);
      const nature : Nature = await this.natureRepository.findById(_availableHeroes.natureId);

      const hero: Hero = new Hero(
        IdHero,
        _availableHeroes.name,
        _availableHeroes.description,
        _availableHeroes.world,
        _availableHeroes.avatar,
        _availableHeroes.created_at,
        nature,
        rarity,
        type,
        stats
      );  


    return await this.repository.create(hero);
  }
  
}


function getRandom(min: number, max: number): number {
  // Generar un número aleatorio entre 0 y 1
  const random = Math.random();
  
  // Calcular el rango y ajustar el número generado al rango deseado
  const range = max - min;
  const randomNumber = Math.floor(random * range) + min;
  
  return randomNumber;
}

 