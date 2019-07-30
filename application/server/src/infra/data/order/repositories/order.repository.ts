import { IOrder } from 'domain/order/entities/iorder-entity.interface';
import { IOrderRepository } from 'domain/order/repositories/iorder.repository';
import { LocationSchema } from 'infra/data/location/schemas/location.schema';
import { OrderSchema } from 'infra/data/order/schemas/order.schema';
import { IResponse } from 'shared/interfaces/response';
import { singleton } from 'tsyringe';

@singleton()
export class OrderRepository implements IOrderRepository {
  public async createOrder(order: IOrder): Promise<IResponse> {
    try {
      const orderCreated = await OrderSchema.create(order);
      await orderCreated.save();

      return {
        success: true,
        message: 'Order created with success',
        data: { id: orderCreated.id },
      };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  public async getInfoOrderById(idOrder: string): Promise<IResponse> {
    try {
      const {
        id,
        code,
        description,
        recipientEmail,
        deliveryDate,
        status,
      }: any = await OrderSchema.findOne({ id: idOrder });

      return {
        success: true,
        data: { id, code, description, recipientEmail, deliveryDate, status },
      };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  public async getLocationsByOrder(idOrder: string): Promise<IResponse> {
    try {
      const {
        id,
        currentPlace,
        originPlace,
        destinationPlace,
        history,
      }: any = await LocationSchema.findOne({ idOrder });

      return {
        success: true,
        data: { id, currentPlace, originPlace, destinationPlace, history },
      };
    } catch (error) {
      return { success: false, message: error };
    }
  }
}
