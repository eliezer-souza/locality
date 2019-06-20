import { IsString, MaxLength } from 'class-validator';
import ValueObject from 'Shared/ValueObjects/ValueObject';

export default class Name extends ValueObject {
  @IsString()
  @MaxLength(15)
  private _firstName: string;

  @IsString()
  @MaxLength(20)
  private _lastName: string;

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  constructor(firstName: string, lastName: string) {
    super();
    this._firstName = firstName;
    this._lastName = lastName;
  }
}
