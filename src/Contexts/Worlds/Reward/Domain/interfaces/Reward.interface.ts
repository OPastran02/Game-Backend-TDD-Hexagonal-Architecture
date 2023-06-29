import { Reward } from '../Reward';

export interface IRewardRepository {  

    findByMundo(world: number): Promise<Reward>;

}
