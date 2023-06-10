import { DateValueObject } from '../../../../Shared/Domain/value-object/DateValueObjects';
//import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerCreatedAt extends DateValueObject {
  constructor(value: Date) {
    super(value);
  }
}