"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValueObject = void 0;
const ValueObject_1 = require("./ValueObject");
/*al primitivo le adhiere la condicion number y le agrega un metodo de comparación*/
class NumberValueObject extends ValueObject_1.ValueObject {
    isBiggerThan(other) {
        return this.value > other.value;
    }
    isLowerThan(other) {
        return this.value < other.value;
    }
    isEqualTo(other) {
        return this.value == other.value;
    }
}
exports.NumberValueObject = NumberValueObject;
//# sourceMappingURL=NumberValueObject.js.map