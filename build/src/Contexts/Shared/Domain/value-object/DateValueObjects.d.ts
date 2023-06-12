import { ValueObject } from './ValueObject';
export declare abstract class DateValueObject extends ValueObject<Date> {
    isAfter(other: DateValueObject): boolean;
    isBefore(other: DateValueObject): boolean;
    isEqualTo(other: DateValueObject): boolean;
    protected validateValue(value: Date): void;
}
