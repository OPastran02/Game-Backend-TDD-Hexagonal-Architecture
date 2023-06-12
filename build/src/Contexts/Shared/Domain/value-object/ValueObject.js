"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
const InvalidArgumentError_1 = require("./InvalidArgumentError");
class ValueObject {
    /*asegura de que el valor no sea null ni undefined, y si lo es, lanza un error*/
    constructor(value) {
        this.value = value;
        this.ensureValueIsDefined(value);
    }
    /*Chequear si el valor esta definido*/
    ensureValueIsDefined(value) {
        if (value === null || value === undefined) {
            throw new InvalidArgumentError_1.InvalidArgumentError('Value must be defined');
        }
    }
    /* equals se utiliza para comparar dos objetos de valor. Compara
    el constructor de ambos objetos y sus valores para determinar si son iguales.*/
    equals(other) {
        return other.constructor.name === this.constructor.name && other.value === this.value;
    }
    toString() {
        return this.value.toString();
    }
}
exports.ValueObject = ValueObject;
//# sourceMappingURL=ValueObject.js.map