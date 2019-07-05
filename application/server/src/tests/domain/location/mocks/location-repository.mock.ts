import { ILocation } from 'domain/location/entities/location.entity';
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
}
