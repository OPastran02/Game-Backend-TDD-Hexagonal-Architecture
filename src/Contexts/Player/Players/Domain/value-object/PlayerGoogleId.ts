import { StringValueObject } from '../../../../Shared/Domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerGoogleId extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThanAvailableharacters(value);
  }

  private ensureLengthIsLessThanAvailableharacters(value: string): void {
    var quantity = 15;
    if (value.length > quantity) {
      throw new InvalidArgumentError(`The Player googleId <${value}> has more than ${quantity} characters`);
    }
  }
}