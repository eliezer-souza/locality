import { IsEmail } from 'class-validator';
import { ValueObject } from 'Shared/ValueObjects/ValueObject';

export class Email extends ValueObject {
  @IsEmail()
  private _address: string;

  get address() {
    return this._address;
  }

  constructor(address: string) {
    super();
    this._address = address;
  }
}
