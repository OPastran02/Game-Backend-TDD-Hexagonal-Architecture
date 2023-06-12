"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateValueObject = void 0;
const ValueObject_1 = require("./ValueObject");
const InvalidArgumentError_1 = require("./InvalidArgumentError");
class DateValueObject extends ValueObject_1.ValueObject {
    isAfter(other) {
        return this.value > other.value;
    }
    isBefore(other) {
        return this.value < other.value;
    }
    isEqualTo(other) {
        return this.value.getTime() === other.value.getTime();
    }
    validateValue(value) {
        if (isNaN(value.getTime())) {
            throw new InvalidArgumentError_1.InvalidArgumentError('Invalid date value');
        }
    }
}
exports.DateValueObject = DateValueObject;
//# sourceMappingURL=DateValueObjects.js.map