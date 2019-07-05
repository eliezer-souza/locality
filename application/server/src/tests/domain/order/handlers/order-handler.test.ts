import 'reflect-metadata';

import { CreateOrderCommand } from 'domain/order/commands/create-order.command';
import { OrderHandler } from 'domain/order/handlers/order.handler';
import { FakeOrderRepository } from '../mocks/order-repository.mock';

describe('Test of handler order', () => {
  it('should be a create order with success', async () => {
    const handler = new OrderHandler(new FakeOrderRepository());
    const command = new CreateOrderCommand(
      '001',
      'steel ax delivery',
      'bjorn@vikings.com',
      new Date('2019-07-02'),
      'progress',
    );

    const created = await handler.handle(command);

    expect(created.success).toBe(true);
  });
});
