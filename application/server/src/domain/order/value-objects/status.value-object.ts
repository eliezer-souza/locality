import { IsEnum } from 'class-validator';
import { ValueObject } from 'shared/value-objects/value-object';

export class Status extends ValueObject {
  @IsEnum(['progress', 'delivered'], {
    message: 'status must be a valid value [progress, delivered]',
  })
  public readonly status: string;

  constructor(status: string) {
    super();
    this.status = status;
  }
}
