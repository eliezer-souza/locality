import { InfoOrderQuery } from 'domain/order/queries/info-order.query';
import { LocationsOrderQuery } from 'domain/order/queries/locations-order';
import { IResponse } from 'shared/interfaces/response';

export class IOrderQueryHandler {
  infoOrderHandle: (query: InfoOrderQuery) => Promise<IResponse>;
  locationsOrderHandle: (query: LocationsOrderQuery) => Promise<IResponse>;
}
