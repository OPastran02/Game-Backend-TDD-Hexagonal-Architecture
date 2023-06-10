import { NumberValueObject } from '../../../../Shared/Domain/value-object/NumberValueObject';
import { PlayerInvalidIdError } from '../../../Players/Domain/exceptions/PlayerInvalidIdError';

export class PlayerId extends NumberValueObject{
  constructor(value: number) {
    super(value);
    this.ensureValueIsPositive(value);
  }

  private ensureValueIsPositive(value: number): void {
    if (value <= 0) {
      throw new PlayerInvalidIdError('PlayerId must be a positive number');
    }
  }
}