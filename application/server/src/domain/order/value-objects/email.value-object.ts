import { IsEmail } from 'class-validator';
import { ValueObject } from 'shared/value-objects/value-object';

export class Email extends ValueObject {
  @IsEmail()
  public readonly address: string;

  constructor(address: string) {
    super();
    this.address = address;
  }
}
