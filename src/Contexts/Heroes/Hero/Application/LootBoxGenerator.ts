export class LootboxGenerator {
    private ratesByLevel = {
        1: [0, 0, 1, 3, 5, 7, 15, 15, 15, 15, 24],
        100: [1, 1, 8, 20, 20, 20, 20, 10, 0, 0, 0]
      };
  
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
}