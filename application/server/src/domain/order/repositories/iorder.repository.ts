import { IOrder } from 'domain/order/entities/order.entity';
import { IResponse } from 'shared/interfaces/response';

export interface IOrderRepository {
  createOrder: (order: IOrder) => Promise<IResponse>;
}
