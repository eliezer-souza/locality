import { httpStatusCode } from 'api/constants/http.constant';
import { CreateOrderCommand } from 'domain/order/commands/create-order.command';
import { IOrderHandler } from 'domain/order/handlers/iorder-handler.interface';
import { NextFunction, Request, Response } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject } from 'tsyringe';

@autoInjectable()
export class OrderController {
  private readonly _orderHandler: IOrderHandler;

  constructor(
    @inject(Identifier.ORDER_HANDLER) private orderHandler?: IOrderHandler,
  ) {
    this._orderHandler = orderHandler;
  }

  create = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void | Response> => {
    try {
      const {
        code,
        description,
        recipientEmail,
        deliveryDate,
        status,
      } = request.body;

      const command = new CreateOrderCommand(
        code,
        description,
        recipientEmail,
        deliveryDate,
        status,
      );

      const order = await this._orderHandler.handle(command);

      if (!order.success) {
        return response.status(httpStatusCode.BAD_REQUEST).send(order);
      }

      return response.status(httpStatusCode.CREATED).send(order);
    } catch (error) {
      return next(error);
    }
  };
}
