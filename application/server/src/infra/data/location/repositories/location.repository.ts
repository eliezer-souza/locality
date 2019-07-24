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

  public async addHistoryLocation(id: string): Promise<IResponse> {
    try {
      const { currentPlace }: any = await LocationSchema.findOne({
        id,
      });

      await LocationSchema.updateOne(
        { id },
        {
          $push: { history: currentPlace },
        },
      );

      return { success: true };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  public async updateCurrentPlace(
    id: string,
    latitude: number,
    longitude: number,
    city: string,
    state: string,
    country: string,
  ): Promise<IResponse> {
    try {
      const place = { latitude, longitude, city, state, country };

      await LocationSchema.updateOne({ id }, { currentPlace: place });

      return { success: true };
    } catch (error) {
      return { success: false, message: error };
    }
  }
}
