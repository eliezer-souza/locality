import { IOrderQueryHandler } from 'domain/order/handlers/queries/iorder-query-handler.interface';
import { InfoOrderQuery } from 'domain/order/queries/info-order.query';
import { IOrderRepository } from 'domain/order/repositories/iorder.repository';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { CommandResult } from 'shared/interfaces/command-result';
import { IResponse } from 'shared/interfaces/response';
import { autoInjectable, inject, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class OrderQueryHandler implements IOrderQueryHandler {
  private readonly _orderRepository: IOrderRepository;

  constructor(
    @inject(Identifier.ORDER_REPOSITORY)
    private orderRepository?: IOrderRepository,
  ) {
    this._orderRepository = orderRepository;
  }

  public async infoOrderHandle(query: InfoOrderQuery): Promise<IResponse> {
    const response = await this._orderRepository.getInfoOrderById(query.id);

    if (!response.success) {
      return new CommandResult(false, response.message);
    }

    return new CommandResult(true, 'Informations of order', response.data);
  }
}
