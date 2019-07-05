import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { IOrder } from 'domain/order/entities/iorder-entity.interface';
import { Email } from 'domain/order/value-objects/email.value-object';
import { Status } from 'domain/order/value-objects/status.value-object';
import { Entity } from 'shared/entities/entity';

export class Order extends Entity {
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  private readonly code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(25)
  private readonly description: string;

  private readonly recipientEmail: Email;

  @IsDate()
  private readonly deliveryDate: Date;

  private readonly status: Status;

  constructor(
    code: string,
    description: string,
    recipientEmail: Email,
    deliveryDate: Date,
    status: Status,
  ) {
    super();
    this.code = code;
    this.description = description;

    recipientEmail.isValid()
      ? (this.recipientEmail = recipientEmail)
      : this.addNotification(recipientEmail.notifications);

    this.deliveryDate = new Date(deliveryDate);

    status.isValid()
      ? (this.status = status)
      : this.addNotification(status.notifications);
  }

  public json(): IOrder {
    return {
      id: this.id,
      code: this.code,
      description: this.description,
      recipientEmail: this.recipientEmail.address,
      deliveryDate: this.deliveryDate,
      status: this.status.status,
    };
  }
}
