import { ILocation } from 'domain/location/entities/ilocation-entity.interface';
import { ILocationRepository } from 'domain/location/repositories/ilocation.repository';
import { LocationSchema } from 'infra/data/location/schemas/location.schema';
import { IResponse } from 'shared/interfaces/response';
import { singleton } from 'tsyringe';

@singleton()
export class LocationRepository implements ILocationRepository {
  public async createLocation(location: ILocation): Promise<IResponse> {
    try {
      const locationCreated = await LocationSchema.create(location);
      await locationCreated.save();

      return {
        success: true,
        message: 'Location created with success',
        data: { id: locationCreated.id },
      };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  public async orderExists(idOrder: string): Promise<boolean> {
    const location = await LocationSchema.find({ idOrder });

    if (location.length > 0) {
      return true;
    }

    return false;
  }
}
