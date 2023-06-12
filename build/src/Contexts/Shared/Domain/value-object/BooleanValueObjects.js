"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanValueObject = void 0;
const ValueObject_1 = require("./ValueObject");
class BooleanValueObject extends ValueObject_1.ValueObject {
    isTrue() {
        return this.value === true;
    }
    isFalse() {
        return this.value === false;
    }
}
exports.BooleanValueObject = BooleanValueObject;
//# sourceMappingURL=BooleanValueObjects.js.map