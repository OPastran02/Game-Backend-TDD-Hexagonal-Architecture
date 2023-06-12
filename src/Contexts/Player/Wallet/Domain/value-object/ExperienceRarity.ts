import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class ExperienceRarity{
  LIMIT=99999;
  FIELD_NAME="ExperienceQuantity";
  value: number;

  constructor(value: number) {
    this.ensureValueWithinLimit(value);
    this.value = value;
  }

  private ensureValueWithinLimit(value: number): void {
    if (value > this.LIMIT) {
      throw new InvalidArgumentError(`wallet ${this.FIELD_NAME} Value exceeds the limit of ${this.LIMIT}: ${value}`);
    }
  }

  getValue(): number {
    return this.value;
  }
}