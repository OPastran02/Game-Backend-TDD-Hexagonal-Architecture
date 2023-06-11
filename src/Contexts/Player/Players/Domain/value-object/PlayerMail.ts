import { InvalidArgumentError } from '../../../../Shared/Domain/value-object/InvalidArgumentError';

export class PlayerMail{
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  FIELD_NAME = "mail"
  value: string;

  constructor(value: string) {
    if (value !== null) {
      this.ensureIsValidEmail(value);
    }
    this.value = value;
  }

  private ensureIsValidEmail(value: string): void {

    if (!this.emailRegex.test(value)) {
      throw new InvalidArgumentError(`Player email format: <${value}>`);
    }
  }
}