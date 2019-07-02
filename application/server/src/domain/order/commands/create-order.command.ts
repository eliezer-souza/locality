import { Email } from 'domain/order/value-objects/email.value-object';
import { Command } from 'shared/commands/command';

export class CreateOrderCommand extends Command {
  public code: string;
  public description: string;
  public recipientEmail: string;
  public dateExpectedDelivery: Date;
  public dateDelivery: Date;

  constructor(
    code: string,
    description: string,
    recipientEmail: string,
    dateExpectedDelivery: Date,
    dateDelivery: Date,
  ) {
    super();

    this.code = code;
    this.description = description;
    this.recipientEmail = recipientEmail;
    this.dateExpectedDelivery = dateExpectedDelivery;
    this.dateDelivery = dateDelivery;
  }
}
