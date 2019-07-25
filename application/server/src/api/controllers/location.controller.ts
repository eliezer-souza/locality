import { httpStatusCode } from 'api/constants/http.constant';
import { CreateLocationCommand } from 'domain/location/commands/create-location.command';
import { UpdateCurrentPlaceCommand } from 'domain/location/commands/update-current-place.command';
import { ILocationCommandHandler } from 'domain/location/handlers/commands/ilocation-command-handler.interface';
import { NextFunction, Request, Response } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject } from 'tsyringe';

@autoInjectable()
export class LocationController {
  private readonly _locationHandler: ILocationCommandHandler;

  constructor(
    @inject(Identifier.LOCATION_COMMAND_HANDLER)
    private locationHandler?: ILocationCommandHandler,
  ) {
    this._locationHandler = locationHandler;
  }

  create = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void | Response> => {
    try {
      const {
        latitude,
        longitude,
        city,
        state,
        country,
        latitudeFinal,
        longitudeFinal,
        cityFinal,
        stateFinal,
        countryFinal,
        idOrder,
      } = request.body;

      const command = new CreateLocationCommand(
        latitude,
        longitude,
        city,
        state,
        country,
        latitudeFinal,
        longitudeFinal,
        cityFinal,
        stateFinal,
        countryFinal,
        idOrder,
      );

      const location = await this._locationHandler.createLocationHandle(
        command,
      );

      if (!location.success) {
        return response.status(httpStatusCode.BAD_REQUEST).send(location);
      }

      return response.status(httpStatusCode.CREATED).send(location);
    } catch (error) {
      return next(error);
    }
  };

  updateCurrentPlace = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void | Response> => {
    try {
      const {
        params: { id },
        body: { latitude, longitude, city, state, country },
      } = request;

      const command = new UpdateCurrentPlaceCommand(
        id,
        latitude,
        longitude,
        city,
        state,
        country,
      );

      const responseUpdated = await this._locationHandler.updateCurrentPlaceHandle(
        command,
      );

      if (!responseUpdated.success) {
        return response
          .status(httpStatusCode.BAD_REQUEST)
          .send(responseUpdated);
      }

      return response.status(httpStatusCode.OK).send(responseUpdated);
    } catch (error) {
      return next(error);
    }
  };
}
