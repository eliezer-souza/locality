import { IOrder } from 'domain/order/entities/iorder-entity.interface';
import { IResponse } from 'shared/interfaces/response';

export interface IOrderRepository {
  createOrder: (order: IOrder) => Promise<IResponse>;
  getInfoOrderById: (id: string) => Promise<IResponse>;
}
