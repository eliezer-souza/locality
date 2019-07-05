import { httpStatusCode } from 'api/constants/http.constant';
import { CreateOrderCommand } from 'domain/order/commands/create-order.command';
import { OrderHandler } from 'domain/order/handlers/order.handler';
import { NextFunction, Request, Response } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject } from 'tsyringe';

@autoInjectable()
export class OrderController {
  private readonly _handler: OrderHandler;

  constructor(
    @inject(Identifier.ORDER_HANDLER) private orderHandler?: OrderHandler,
  ) {
    this._handler = orderHandler;
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

      const order = await this._handler.handle(command);

      if (!order.success) {
        return response.status(httpStatusCode.BAD_REQUEST).send(order);
      }

      return response.status(httpStatusCode.CREATED).send(order);
    } catch (error) {
      return next(error);
    }
  };
}
