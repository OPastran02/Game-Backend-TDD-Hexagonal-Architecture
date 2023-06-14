import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class Description {
  MAX_LENGTH = 200
  FIELD_NAME = "Heroe Description"
  value: string;

  constructor(value: string) {
    if (value !== null) {
      this.ensureLengthIsLessThanAvailableCharacters(value);
    }
    this.value = value;
  }

  private ensureLengthIsLessThanAvailableCharacters(value: string): void {
    if (value.length > this.MAX_LENGTH) {
      throw new InvalidArgumentError(`The Player ${this.FIELD_NAME} <${value}> has more than ${this.MAX_LENGTH} characters`);
    }
  }

  getValue(): string {
    return this.value;
  }
}