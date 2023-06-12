export declare class PlayerLoginDays {
    LIMIT: number;
    FIELD_NAME: string;
    value: number;
    constructor(value: number);
    private ensureValueWithinLimit;
    getValue(): number;
}
