import seedrandom from 'seedrandom';


export class LootboxGenerator {
    private ratesByLevel = {
        //[GOD,ULTRA,SSS,SS,S,A,B,C,D,E]
        1: [0, 0, 0.1, 3, 5, 7, 15, 20, 25, 25],
        100: [0.8, 0.8, 8.4, 20, 20, 20, 20, 10, 0, 0]
      };

    private rng: seedrandom.PRNG;

    constructor(seed: string) {
      this.rng = seedrandom(seed);
    }  
  
    calculateTierProbabilitiesForLevel(level: number): number[] {
      const rateStart = this.ratesByLevel[1];
      const rateEnd = this.ratesByLevel[100];
      
      // Calcula las probabilidades para cada tier
      const tierProbabilities: number[] = [];
      for (let i = 0; i < rateStart.length; i++) {
        // Realiza una interpolación lineal entre las tasas de inicio y final
        const probability = rateStart[i] + ((rateEnd[i] - rateStart[i]) / 100) * (level - 1);
        tierProbabilities.push(probability);
      }
      
      return tierProbabilities;
    }

    
    getRandomPosition(tierProbabilities: number[]): number {
      const totalPositiveProbability = tierProbabilities.reduce((a, b) => a + b, 0);
      const random = this.rng() * totalPositiveProbability;
      let cumulativeProbability = 0;

      for (let i = tierProbabilities.length-1; i > 0; i--) {
        cumulativeProbability += tierProbabilities[i];
        if (random < cumulativeProbability) {
          return i;
        }
      }

      return tierProbabilities.length - 1;
    }

}