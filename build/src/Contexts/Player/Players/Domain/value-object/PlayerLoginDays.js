"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLoginDays = void 0;
const InvalidArgumentError_1 = require("../../../../Shared/Domain/value-object/InvalidArgumentError");
class PlayerLoginDays {
    constructor(value) {
        this.LIMIT = 99999;
        this.FIELD_NAME = "PlayerLoginDays";
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
exports.PlayerLoginDays = PlayerLoginDays;
//# sourceMappingURL=PlayerLoginDays.js.map