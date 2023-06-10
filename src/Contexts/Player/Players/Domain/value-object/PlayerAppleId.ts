import { StringValueObject } from '../../../../Shared/Domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerAppleId extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThanAvailableharacters(value);
  }

  private ensureLengthIsLessThanAvailableharacters(value: string): void {
    var quantity = 30;
    if (value.length > quantity) {
      throw new InvalidArgumentError(`The player AppleId <${value}> has more than ${quantity} characters`);
    }
  }
}