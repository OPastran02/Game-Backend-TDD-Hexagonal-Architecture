"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerFacebookId = void 0;
const InvalidArgumentError_1 = require("../../../../Shared/Domain/value-object/InvalidArgumentError");
class PlayerFacebookId {
    constructor(value) {
        this.MAX_LENGTH = 15;
        this.FIELD_NAME = "facebookId";
        if (value !== null) {
            this.ensureLengthIsLessThanAvailableCharacters(value);
        }
        this.value = value;
    }
    ensureLengthIsLessThanAvailableCharacters(value) {
        if (value.length > this.MAX_LENGTH) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The Player ${this.FIELD_NAME} <${value}> has more than ${this.MAX_LENGTH} characters`);
        }
    }
    getValue() {
        return this.value !== '' ? this.value : null;
    }
}
exports.PlayerFacebookId = PlayerFacebookId;
//# sourceMappingURL=PlayerFacebookId.js.map