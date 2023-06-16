import { LootboxGenerator } from './LootBoxGenerator';


export class probabilities {
    private lootBoxGenerator: LootboxGenerator;

    constructor(lootBoxGenerator: LootboxGenerator) {
        this.lootBoxGenerator = lootBoxGenerator;
    }

    public async probabilities(num:number): Promise<number[]> {

        const arrProbabilities = this.lootBoxGenerator.calculateTierProbabilitiesForLevel(num);
        return arrProbabilities
    }
}  