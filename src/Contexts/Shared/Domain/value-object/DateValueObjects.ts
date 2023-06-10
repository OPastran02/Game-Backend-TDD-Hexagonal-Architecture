import { ValueObject } from './ValueObject';
import { InvalidArgumentError } from './InvalidArgumentError';

export abstract class DateValueObject extends ValueObject<Date> {
  isAfter(other: DateValueObject): boolean {
    return this.value > other.value;
  }

  isBefore(other: DateValueObject): boolean {
    return this.value < other.value;
  }

  isEqualTo(other: DateValueObject): boolean {
    return this.value.getTime() === other.value.getTime();
  }

  protected validateValue(value: Date): void {
    if (isNaN(value.getTime())) {
      throw new InvalidArgumentError('Invalid date value');
    }
  }
}