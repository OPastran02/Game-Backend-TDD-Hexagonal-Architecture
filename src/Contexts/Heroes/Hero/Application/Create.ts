import { IHeroRepository } from '../Domain/interfaces/Hero.interface';
import { Hero } from '../Domain/Hero';
import { Player } from '../../../Player/Players/Domain/Player';
import { Rarity } from '../../Rarity/Domain/Rarity';
import { Nature } from '../../Nature/Domain/Nature';
import { Type } from '../../Type/Domain/Type';
import { Stats } from '../../Stats/Domain/Stats';
import { Race } from '../../Race/Domain/Race';


import { AvailableHeroes } from 'src/Contexts/AvailableHeroes/Domain/AvailableHeroes';
import { IAvailableHeroesRepository } from '../../../AvailableHeroes/Domain/interfaces/AvailableHeroes.inteface';
import { ITypeRepository } from '../../Type/Domain/interfaces/Type.interface';
import { IRarityRepository } from '../../Rarity/Domain/interfaces/Rarity.interface';
import { INatureRepository } from '../../Nature/Domain/interfaces/Nature.interface';
import { IPlayerRepository } from '../../../Player/Players/Domain/Interfaces/Player.interface';
import { IRaceRepository } from '../../Race/Domain/interfaces/Race.interface';


import { LootboxGenerator } from './LootBoxGenerator';

import { v4 as uuidv4 } from 'uuid';

export class Create {
  private repository: IHeroRepository;
  private heroesAvailablesRepository: IAvailableHeroesRepository;
  private typeRepository: ITypeRepository;
  private rarityRepository: IRarityRepository;
  private natureRepository: INatureRepository;
  private playerRepository: IPlayerRepository;
  private raceRepository: IRaceRepository;

  constructor(repository: IHeroRepository, 
    heroesAvailablesRepository: IAvailableHeroesRepository,
    typeRepository: ITypeRepository,
    rarityRepository: IRarityRepository,
    natureRepository: INatureRepository,
    playerRepository: IPlayerRepository,
    raceRepository: IRaceRepository,
    ) {
    this.repository = repository;
    this.heroesAvailablesRepository = heroesAvailablesRepository;
    this.typeRepository = typeRepository;
    this.rarityRepository = rarityRepository;
    this.natureRepository = natureRepository;
    this.playerRepository = playerRepository;
    this.raceRepository = raceRepository;
  }

  public async Create(id: string, booster:number[], modifier:number, _race:number): Promise<Hero> {

      const player: Player = await this.playerRepository.playerAlwaysFindById(id);
      const quant_hero: number = await this.repository.IsThereAnyHeroInQueue(player.id,true);
      console.log(quant_hero)
      if (quant_hero >= 1) {
        throw new Error('Ya existe un héroe en la cola');
      }
      const IdHero = uuidv4();

      //obtener un random de available_Heroes
      var lootboxGenerator = new LootboxGenerator(Date.now().toString());
      var arrProbabilities : number[] = lootboxGenerator.calculateTierProbabilitiesForLevel(player.level);
      console.log(arrProbabilities)
      if(modifier==1){
        arrProbabilities=booster;
        console.log(arrProbabilities)
      }else{
        for(var i=0; i<= arrProbabilities.length-1;i++){
          arrProbabilities[i] += booster[i];
        }
        console.log(arrProbabilities)
      }
      
      var selectedRarity : number = lootboxGenerator.getRandomPosition(arrProbabilities);
      var allAvailableHeroes: AvailableHeroes[] = await this.heroesAvailablesRepository.availableHeroFindByRarity(selectedRarity);
      if(_race != 0){
        allAvailableHeroes = allAvailableHeroes.filter(hero => hero.raceId === _race);
      }
      var randomIndex = Math.floor(Math.random() * allAvailableHeroes.length);
      var _availableHeroes: AvailableHeroes = allAvailableHeroes[randomIndex];

      //Lo guardo
      const stats : Stats = new Stats(
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
      const type   : Type   = await this.typeRepository.findById(_availableHeroes.typeId);
      const rarity : Rarity = await this.rarityRepository.findById(_availableHeroes.rarityId);
      const nature : Nature = await this.natureRepository.findById(_availableHeroes.natureId);
      const race   : Race = await this.raceRepository.findById(_availableHeroes.raceId);

      //ahora veo donde lo guardo
      const heroesExisting : Hero[] | null = await this.repository.findByRace(race.id, player.id)    
      const count = heroesExisting?.length ?? 0;
      
      const hero: Hero = new Hero(
        IdHero,
        player.id,
        _availableHeroes.id,
        1,
        0,
        0,
        _availableHeroes.name,
        _availableHeroes.description,
        _availableHeroes.avatar,
        _availableHeroes.created_at,
        nature,
        rarity,
        type,
        stats,
        race,
        0,
        count > 10 ? 0 : count + 1,
        count > 10 ? true : false
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

 