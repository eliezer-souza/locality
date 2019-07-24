import { ILocation } from 'domain/location/entities/ilocation-entity.interface';
import { IResponse } from 'shared/interfaces/response';

export interface ILocationRepository {
  createLocation: (location: ILocation) => Promise<IResponse>;
  orderExists: (idOrder: string) => Promise<boolean>;
  addHistoryLocation: (id: string) => Promise<IResponse>;

  updateCurrentPlace: (
    id: string,
    latitude: number,
    longitude: number,
    city: string,
    state: string,
    country: string,
  ) => Promise<IResponse>;

  getInfoOrderById: (
    id: string,
  ) => Promise<{ idOrder: string; recipientEmail: string }>;
}
