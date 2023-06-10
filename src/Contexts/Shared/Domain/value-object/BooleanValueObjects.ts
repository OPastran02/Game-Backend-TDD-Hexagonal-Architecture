import { ValueObject } from './ValueObject';

export abstract class BooleanValueObject extends ValueObject<boolean> {
  isTrue(): boolean {
    return this.value === true;
  }

  isFalse(): boolean {
    return this.value === false;
  }
}