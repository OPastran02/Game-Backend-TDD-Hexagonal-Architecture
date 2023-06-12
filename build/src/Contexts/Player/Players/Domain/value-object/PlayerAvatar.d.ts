export declare class PlayerAvatar {
    MAX_LENGTH: number;
    FIELD_NAME: string;
    value: string;
    constructor(value: string);
    private ensureLengthIsLessThanAvailableCharacters;
    getValue(): string;
}
