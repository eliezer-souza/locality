import { InfoOrderQuery } from 'domain/order/queries/info-order.query';
import { IResponse } from 'shared/interfaces/response';

export class IOrderQueryHandler {
  infoOrderHandle: (query: InfoOrderQuery) => Promise<IResponse>;
}
