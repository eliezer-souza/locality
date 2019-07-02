import { IOrder } from 'domain/order/entities/order.entity';
import { IOrderRepository } from 'domain/order/repositories/iorder.repository';
import { IResponse } from 'shared/interfaces/response';

export class FakeOrderRepository implements IOrderRepository {
  createOrder(order: IOrder): Promise<IResponse> {
    return new Promise(result => result({ success: true }));
  }
}
