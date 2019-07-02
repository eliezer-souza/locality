import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Email } from 'domain/order/value-objects/email.value-object';
import { Entity } from 'shared/entities/entity';

export interface IOrder {
  id: string;
  code: string;
  description: string;
  recipientEmail: string;
  dateExpectedDelivery: Date;
  dateDelivery: Date;
}

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
  private readonly dateExpectedDelivery: Date;

  @IsDate()
  private readonly dateDelivery: Date;
  private readonly idLocalition: string;

  constructor(
    code: string,
    description: string,
    recipientEmail: Email,
    dateExpectedDelivery: Date,
    dateDelivery: Date,
  ) {
    super();
    this.code = code;
    this.description = description;

    recipientEmail.isValid()
      ? (this.recipientEmail = recipientEmail)
      : this.addNotification(recipientEmail.notifications);

    this.dateExpectedDelivery = dateExpectedDelivery;
    this.dateDelivery = dateDelivery;
  }

  public data(): IOrder {
    return {
      id: this.id,
      code: this.code,
      description: this.description,
      recipientEmail: this.recipientEmail.address,
      dateExpectedDelivery: this.dateExpectedDelivery,
      dateDelivery: this.dateDelivery,
    };
  }
}
