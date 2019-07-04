import { CreateOrderCommand } from 'domain/order/commands/create-order.command';
import { Order } from 'domain/order/entities/order.entity';
import { IOrderRepository } from 'domain/order/repositories/iorder.repository';
import { Email } from 'domain/order/value-objects/email.value-object';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { CommandResult } from 'shared/interfaces/command-result';
import { IResponse } from 'shared/interfaces/response';
import { autoInjectable, inject, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class OrderHandler {
  private _orderRepository: IOrderRepository;

  constructor(
    @inject(Identifier.ORDER_REPOSITORY)
    private orderRepository?: IOrderRepository,
  ) {
    this._orderRepository = orderRepository;
  }

  public async handle(command: CreateOrderCommand): Promise<IResponse> {
    const recipientEmail = new Email(command.recipientEmail);

    const order = new Order(
      command.code,
      command.description,
      recipientEmail,
      command.dateExpectedDelivery,
      command.dateDelivery,
    );

    if (!order.isValid()) {
      return new CommandResult(false, order.notifications.message.join(', '));
    }

    const response = await this._orderRepository.createOrder(order.data());

    if (!response.success) {
      return new CommandResult(false, response.message);
    }

    return new CommandResult(true, 'Order created with success');
  }
}
