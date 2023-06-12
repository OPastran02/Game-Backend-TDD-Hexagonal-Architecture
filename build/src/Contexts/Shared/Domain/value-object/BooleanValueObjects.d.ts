import { ValueObject } from './ValueObject';
export declare abstract class BooleanValueObject extends ValueObject<boolean> {
    isTrue(): boolean;
    isFalse(): boolean;
}
