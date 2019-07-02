import { IOrder } from 'domain/order/entities/order.entity';
import { IOrderRepository } from 'domain/order/repositories/iorder.repository';
import { OrderSchema } from 'infra/data/order/schemas/order.schema';
import { IResponse } from 'shared/interfaces/response';
import { singleton } from 'tsyringe';

@singleton()
export class OrderRepository implements IOrderRepository {
  public async createOrder(order: IOrder): Promise<IResponse> {
    try {
      const orderCreated = await OrderSchema.create(order);
      await orderCreated.save();

      return { success: true };
    } catch (error) {
      return { success: false, message: error };
    }
  }
}
