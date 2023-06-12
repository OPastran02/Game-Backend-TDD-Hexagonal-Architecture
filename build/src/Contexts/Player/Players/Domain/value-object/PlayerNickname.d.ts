export declare class PlayerNickname {
    MAX_LENGTH: number;
    FIELD_NAME: string;
    value: string | null;
    constructor(value: string | null);
    private ensureLengthIsLessThanAvailableCharacters;
    getValue(): string | null;
}
