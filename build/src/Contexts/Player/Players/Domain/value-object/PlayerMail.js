"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerMail = void 0;
const InvalidArgumentError_1 = require("../../../../Shared/Domain/value-object/InvalidArgumentError");
class PlayerMail {
    constructor(value) {
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.FIELD_NAME = "mail";
        if (value !== null) {
            this.ensureIsValidEmail(value);
        }
        this.value = value;
    }
    ensureIsValidEmail(value) {
        if (!this.emailRegex.test(value)) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`Player email format: <${value}>`);
        }
    }
}
exports.PlayerMail = PlayerMail;
//# sourceMappingURL=PlayerMail.js.map