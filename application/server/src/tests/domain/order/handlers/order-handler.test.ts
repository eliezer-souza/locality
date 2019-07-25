import 'reflect-metadata';

import { CreateOrderCommand } from 'domain/order/commands/create-order.command';
import { OrderCommandHandler } from 'domain/order/handlers/commands/order-command.handler';

import { FakeEmailService } from '../../../mocks/services/email-service.mock';
import { FakeQRCodeService } from '../../../mocks/services/qrcode-service.mock';
import { FakeOrderRepository } from '../mocks/order-repository.mock';

describe('Test of handler order', () => {
  it('should be a create order with success', async () => {
    const handler = new OrderCommandHandler(
      new FakeOrderRepository(),
      new FakeEmailService(),
      new FakeQRCodeService(),
    );
    const command = new CreateOrderCommand(
      '001',
      'steel ax delivery',
      'bjorn@vikings.com',
      new Date('2019-07-02'),
      'progress',
    );

    const created = await handler.createOrderHandle(command);

    expect(created.success).toBe(true);
  });
});
