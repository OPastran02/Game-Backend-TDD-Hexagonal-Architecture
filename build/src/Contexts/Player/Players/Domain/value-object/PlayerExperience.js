"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerExperience = void 0;
const InvalidArgumentError_1 = require("../../../../Shared/Domain/value-object/InvalidArgumentError");
class PlayerExperience {
    constructor(value) {
        this.LIMIT = 99999;
        this.FIELD_NAME = "PlayerExperience";
        this.ensureValueWithinLimit(value);
        this.value = value;
    }
    ensureValueWithinLimit(value) {
        if (value > this.LIMIT) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`Player ${this.FIELD_NAME} Value exceeds the limit of ${this.LIMIT}: ${value}`);
        }
    }
    getValue() {
        return this.value;
    }
}
exports.PlayerExperience = PlayerExperience;
//# sourceMappingURL=PlayerExperience.js.map