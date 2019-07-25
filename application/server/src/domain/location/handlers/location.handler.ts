import { CreateLocationCommand } from 'domain/location/commands/create-location.command';
import { UpdateCurrentPlaceCommand } from 'domain/location/commands/update-current-place.command';
import { Location } from 'domain/location/entities/location.entity';
import { ILocationHandler } from 'domain/location/handlers/ilocation-handler.interface';
import { ILocationRepository } from 'domain/location/repositories/ilocation.repository';
import { Place } from 'domain/location/value-objects/place.value-object';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { CommandResult } from 'shared/interfaces/command-result';
import { IResponse } from 'shared/interfaces/response';
import { IEmailService } from 'shared/services/iemail.service';
import { IQRCodeService } from 'shared/services/iqrcode.service';
import { autoInjectable, inject, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class LocationHandler implements ILocationHandler {
  private readonly _locationRepository: ILocationRepository;
  private readonly _emailService: IEmailService;
  private readonly _qrcodeService: IQRCodeService;

  constructor(
    @inject(Identifier.LOCATION_REPOSITORY)
    private locationRepository?: ILocationRepository,

    @inject(Identifier.EMAIL_SERVICE)
    private emailService?: IEmailService,

    @inject(Identifier.QRCODE_SERVICE)
    private qrcodeService?: IQRCodeService,
  ) {
    this._locationRepository = locationRepository;
    this._emailService = emailService;
    this._qrcodeService = qrcodeService;
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

  public async updateCurrentPlaceHandle(
    command: UpdateCurrentPlaceCommand,
  ): Promise<IResponse> {
    if (!command.isValid()) {
      return new CommandResult(
        false,
        'Field validation error',
        command.notifications.message,
      );
    }

    const responseHistory = await this._locationRepository.addHistoryLocation(
      command.id,
    );

    if (!responseHistory.success) {
      return new CommandResult(false, responseHistory.message);
    }

    const response = await this._locationRepository.updateCurrentPlace(
      command.id,
      command.latitude,
      command.longitude,
      command.city,
      command.state,
      command.country,
    );

    if (!response.success) {
      return new CommandResult(false, response.message);
    }

    const order = await this._locationRepository.getInfoOrderById(command.id);

    if (process.env.SEND_EMAIL === 'true') {
      const { idOrder, recipientEmail } = order;
      const baseUrl = process.env.BASE_URL_APP;

      const qrcode = await this._qrcodeService.generate(`${baseUrl}${idOrder}`);

      await this._emailService.send(
        recipientEmail,
        'no-reply@locality.com.br',
        'Locality - Localização atualizada',
        'update-current-place',
        { idOrder, qrcode },
      );
    }

    return new CommandResult(true, 'Current place updated with success!');
  }
}
