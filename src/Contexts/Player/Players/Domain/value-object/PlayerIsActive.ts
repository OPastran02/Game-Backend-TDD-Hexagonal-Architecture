import { BooleanValueObject } from '../../../../Shared/Domain/value-object/BooleanValueObjects';
//import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerIsActive extends BooleanValueObject {
  constructor(value: boolean) {
    super(value);
  }
}