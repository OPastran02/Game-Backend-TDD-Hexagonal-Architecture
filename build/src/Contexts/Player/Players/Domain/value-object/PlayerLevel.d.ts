export declare class PlayerLevel {
    LIMIT: number;
    FIELD_NAME: string;
    value: number;
    constructor(value: number);
    private ensureValueWithinLimit;
    getValue(): number;
}
