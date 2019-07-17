import { CreateLocationCommand } from 'domain/location/commands/create-location.command';
import { Location } from 'domain/location/entities/location.entity';
import { ILocationHandler } from 'domain/location/handlers/ilocation-handler.interface';
import { ILocationRepository } from 'domain/location/repositories/ilocation.repository';
import { Place } from 'domain/location/value-objects/place.value-object';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { CommandResult } from 'shared/interfaces/command-result';
import { IResponse } from 'shared/interfaces/response';
import { autoInjectable, inject, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class LocationHandler implements ILocationHandler {
  private readonly _locationRepository: ILocationRepository;

  constructor(
    @inject(Identifier.LOCATION_REPOSITORY)
    private locationRepository?: ILocationRepository,
  ) {
    this._locationRepository = locationRepository;
  }

  public async createLocationHandle(
    command: CreateLocationCommand,
  ): Promise<IResponse> {
    if (await this._locationRepository.orderExists(command.idOrder)) {
      return new CommandResult(
        false,
        'There is already a registered location record for this order!',
      );
    }

    const originPlace = new Place(
      command.latitude,
      command.longitude,
      command.city,
      command.state,
      command.country,
    );

    const currentPlace = new Place(
      command.latitude,
      command.longitude,
      command.city,
      command.state,
      command.country,
    );

    const destinationPlace = new Place(
      command.latitudeFinal,
      command.longitudeFinal,
      command.cityFinal,
      command.stateFinal,
      command.countryFinal,
    );

    const location = new Location(
      currentPlace,
      originPlace,
      destinationPlace,
      command.idOrder,
    );

    if (!location.isValid()) {
      return new CommandResult(
        false,
        location.notifications.message.join(', '),
      );
    }

    const response = await this._locationRepository.createLocation(
      location.json(),
    );

    if (!response.success) {
      return new CommandResult(false, response.message);
    }

    return new CommandResult(true, response.message, response.data);
  }
}
