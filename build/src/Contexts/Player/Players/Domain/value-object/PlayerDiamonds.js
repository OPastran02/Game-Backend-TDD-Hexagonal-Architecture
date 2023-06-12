"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerDiamonds = void 0;
const InvalidArgumentError_1 = require("../../../../Shared/Domain/value-object/InvalidArgumentError");
class PlayerDiamonds {
    constructor(value) {
        this.LIMIT = 99999;
        this.FIELD_NAME = "PlayerDiamonds";
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
exports.PlayerDiamonds = PlayerDiamonds;
//# sourceMappingURL=PlayerDiamonds.js.map