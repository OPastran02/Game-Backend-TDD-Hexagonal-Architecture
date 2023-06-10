import { StringValueObject } from '../../../../Shared/Domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerAvatar extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThanAvailableCharacters(value);
  }

  private ensureLengthIsLessThanAvailableCharacters(value: string): void {
    var quantity = 15;
    if (value.length > quantity) {
      throw new InvalidArgumentError(`The Player Avatar <${value}> has more than ${quantity} characters`);
    }
  }
}