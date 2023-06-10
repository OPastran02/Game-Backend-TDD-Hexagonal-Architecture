import { InvalidArgumentError } from './InvalidArgumentError';

export type Primitives = String | string | number | Boolean | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
  readonly value: T;

  /*asegura de que el valor no sea null ni undefined, y si lo es, lanza un error*/
  constructor(value: T) {
    this.value = value;
    this.ensureValueIsDefined(value);
  }

  /*Chequear si el valor esta definido*/
  private ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError('Value must be defined');
    }
  }

  /* equals se utiliza para comparar dos objetos de valor. Compara 
  el constructor de ambos objetos y sus valores para determinar si son iguales.*/
  equals(other: ValueObject<T>): boolean {
    return other.constructor.name === this.constructor.name && other.value === this.value;
  }

  toString(): string {
    return this.value.toString();
  }
}