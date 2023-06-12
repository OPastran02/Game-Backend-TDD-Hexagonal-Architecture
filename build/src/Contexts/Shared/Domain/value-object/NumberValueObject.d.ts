import { ValueObject } from './ValueObject';
export declare abstract class NumberValueObject extends ValueObject<number> {
    isBiggerThan(other: NumberValueObject): boolean;
    isLowerThan(other: NumberValueObject): boolean;
    isEqualTo(other: NumberValueObject): boolean;
}
