import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerLoginDays{
  LIMIT=99999;
  FIELD_NAME="PlayerLoginDays";
  value: number;

  constructor(value: number) {
    this.ensureValueWithinLimit(value);
    this.value = value;
  }

  private ensureValueWithinLimit(value: number): void {
    if (value > this.LIMIT) {
      throw new InvalidArgumentError(`Player ${this.FIELD_NAME} Value exceeds the limit of ${this.LIMIT}: ${value}`);
    }
  }

  getValue(): number {
    return this.value;
  }
}