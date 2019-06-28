import { IsString, MaxLength } from 'class-validator';
import { ValueObject } from 'shared/value-objects/value-object';

export class Name extends ValueObject {
  @IsString()
  @MaxLength(15)
  public readonly firstName: string;

  @IsString()
  @MaxLength(20)
  public readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
  }

  toJson() {
    return { firstName: this.firstName, lastName: this.lastName };
  }
}
