import { ILocation } from 'domain/location/entities/ilocation-entity.interface';
import { IResponse } from 'shared/interfaces/response';

export interface ILocationRepository {
  createLocation: (location: ILocation) => Promise<IResponse>;
  orderExists: (idOrder: string) => Promise<boolean>;
}
