import { DateValueObject } from '../../../../Shared/Domain/value-object/DateValueObjects';
//import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerLastLogin extends DateValueObject {
  constructor(value: Date) {
    super(value);
  }
}