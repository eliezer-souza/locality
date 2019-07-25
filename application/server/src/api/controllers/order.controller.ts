import { httpStatusCode } from 'api/constants/http.constant';
import { CreateOrderCommand } from 'domain/order/commands/create-order.command';
import { IOrderCommandHandler } from 'domain/order/handlers/commands/iorder-command-handler.interface';
import { IOrderQueryHandler } from 'domain/order/handlers/queries/iorder-query-handler.interface';
import { InfoOrderQuery } from 'domain/order/queries/info-order.query';
import { NextFunction, Request, Response } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject } from 'tsyringe';

@autoInjectable()
export class OrderController {
  private readonly _orderCommandHandler: IOrderCommandHandler;
  private readonly _orderQueryHandler: IOrderQueryHandler;

  constructor(
    @inject(Identifier.ORDER_COMMAND_HANDLER)
    private orderCommandHandler?: IOrderCommandHandler,

    @inject(Identifier.ORDER_QUERY_HANDLER)
    private orderQueryHandler?: IOrderQueryHandler,
  ) {
    this._orderCommandHandler = orderCommandHandler;
    this._orderQueryHandler = orderQueryHandler;
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

      const order = await this._orderCommandHandler.createOrderHandle(command);

      if (!order.success) {
        return response.status(httpStatusCode.BAD_REQUEST).send(order);
      }

      return response.status(httpStatusCode.CREATED).send(order);
    } catch (error) {
      return next(error);
    }
  };

  infoOrder = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void | Response> => {
    try {
      const { id } = request.params;

      const query = new InfoOrderQuery(id);

      const infoOrder = await this._orderQueryHandler.infoOrderHandle(query);

      if (!infoOrder.success) {
        return response.status(httpStatusCode.NOT_FOUND).send(infoOrder);
      }

      return response.status(httpStatusCode.OK).send(infoOrder);
    } catch (error) {
      return next(error);
    }
  };
}
