import { Command } from 'shared/commands/command';

export class CreateOrderCommand extends Command {
  public code: string;
  public description: string;
  public recipientEmail: string;
  public deliveryDate: Date;
  public status: string;

  constructor(
    code: string,
    description: string,
    recipientEmail: string,
    deliveryDate: Date,
    status: string,
  ) {
    super();

    this.code = code;
    this.description = description;
    this.recipientEmail = recipientEmail;
    this.deliveryDate = deliveryDate;
    this.status = status;
  }
}
