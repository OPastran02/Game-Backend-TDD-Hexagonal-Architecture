import { StringValueObject } from '../../../../Shared/Domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerFirstName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThanAvailableCharacters(value);
  }

  private ensureLengthIsLessThanAvailableCharacters(value: string): void {
    var quantity = 30;
    if (value.length > quantity) {
      throw new InvalidArgumentError(`The Player Firstname <${value}> has more than ${quantity} characters`);
    }
  }
}