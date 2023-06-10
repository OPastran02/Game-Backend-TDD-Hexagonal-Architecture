import { StringValueObject } from '../../../../Shared/Domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerPhrase extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThanAvailableCharacters(value);
  }

  private ensureLengthIsLessThanAvailableCharacters(value: string): void {
    var quantity = 150;
    if (value.length > quantity) {
      throw new InvalidArgumentError(`The Player phrase <${value}> has more than ${quantity} characters`);
    }
  }
}