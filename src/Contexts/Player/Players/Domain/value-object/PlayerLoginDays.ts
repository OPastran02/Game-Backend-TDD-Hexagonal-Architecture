import { NumberValueObject } from '../../../../Shared/Domain/value-object/NumberValueObject';
import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerLoginDays extends NumberValueObject {
  constructor(value: number) {
    super(value);
    this.ensureValueWithinLimit(value);
  }

  private ensureValueWithinLimit(value: number): void {
    const limit = 1000;

    if (value > limit) {
      throw new InvalidArgumentError(`Player login days Value exceeds the limit of ${limit}: ${value}`);
    }
  }
}