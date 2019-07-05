import { httpStatusCode } from 'api/constants/http.constant';
import { CreateLocationCommand } from 'domain/location/commands/create-location.command';
import { ILocationHandler } from 'domain/location/handlers/ilocation-handler.interface';
import { NextFunction, Request, Response } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject } from 'tsyringe';

@autoInjectable()
export class LocationController {
  private readonly _locationHandler: ILocationHandler;

  constructor(
    @inject(Identifier.LOCATION_HANDLER)
    private locationHandler?: ILocationHandler,
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

      const location = await this._locationHandler.handle(command);

      if (!location.success) {
        return response.status(httpStatusCode.BAD_REQUEST).send(location);
      }

      return response.status(httpStatusCode.CREATED).send(location);
    } catch (error) {
      return next(error);
    }
  };
}
