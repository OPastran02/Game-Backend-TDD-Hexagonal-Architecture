import { NumberValueObject } from '../../../../Shared/Domain/value-object/NumberValueObject';
import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerCoins extends NumberValueObject {
  constructor(value: number) {
    super(value);
    this.ensureValueWithinLimit(value);
  }

  private ensureValueWithinLimit(value: number): void {
    const limit = 99999;

    if (value > limit) {
      throw new InvalidArgumentError(`Player Coins Value exceeds the limit of ${limit}: ${value}`);
    }
  }
}