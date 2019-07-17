import { CreateOrderCommand } from 'domain/order/commands/create-order.command';
import { IResponse } from 'shared/interfaces/response';

export class IOrderHandler {
  createOrderHandle: (command: CreateOrderCommand) => Promise<IResponse>;
}
