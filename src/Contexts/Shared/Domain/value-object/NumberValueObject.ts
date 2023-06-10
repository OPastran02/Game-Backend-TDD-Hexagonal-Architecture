import { ValueObject } from './ValueObject';

/*al primitivo le adhiere la condicion number y le agrega un metodo de comparación*/
export abstract class NumberValueObject extends ValueObject<number> {
  isBiggerThan(other: NumberValueObject): boolean {
    return this.value > other.value;
  }

  isLowerThan(other: NumberValueObject): boolean {
    return this.value < other.value;
  }

  isEqualTo(other: NumberValueObject): boolean {
    return this.value == other.value;
  }
}