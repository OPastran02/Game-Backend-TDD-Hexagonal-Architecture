import seedrandom from 'seedrandom';


export class LootboxGenerator {
    private ratesByLevel = {
        1: [0, 0, 1, 3, 5, 7, 15, 15, 15, 15, 24],
        100: [0.8, 0.8, 8.4, 20, 20, 20, 20, 10, 0, 0, 0]
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
      console.log(totalPositiveProbability)
      console.log(random)
      let cumulativeProbability = 0;

      for (let i = tierProbabilities.length-1; i > 0; i--) {
        cumulativeProbability += tierProbabilities[i];
        console.log(cumulativeProbability);
        if (random < cumulativeProbability) {
          console.log("llegue a %d", i);
          return i;
        }
      }
  
      // En caso de que no se haya seleccionado ninguna posición,
      // devolver la última posición como fallback
      return tierProbabilities.length - 1;
    }

}