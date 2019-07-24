import { ILocation } from 'domain/location/entities/ilocation-entity.interface';
import { ILocationRepository } from 'domain/location/repositories/ilocation.repository';
import { IResponse } from 'shared/interfaces/response';

export class FakeLocationRepository implements ILocationRepository {
  createLocation(location: ILocation): Promise<IResponse> {
    return new Promise(result => result({ success: true }));
  }

  orderExists(idOrder: string): Promise<boolean> {
    if (idOrder === 'location123') {
      return new Promise(result => result(true));
    }

    return new Promise(result => result(false));
  }

  addHistoryLocation(id: string): Promise<IResponse> {
    return new Promise(result => result({ success: true }));
  }
  updateCurrentPlace(
    id: string,
    latitude: number,
    longitude: number,
    city: string,
    state: string,
    country: string,
  ): Promise<IResponse> {
    return new Promise(result => result({ success: true }));
  }
}
