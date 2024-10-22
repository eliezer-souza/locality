import 'reflect-metadata';

import { CreateLocationCommand } from 'domain/location/commands/create-location.command';
import { UpdateCurrentPlaceCommand } from 'domain/location/commands/update-current-place.command';
import { LocationCommandHandler } from 'domain/location/handlers/commands/location-command.handler';

import { FakeEmailService } from '../../../mocks/services/email-service.mock';
import { FakeQRCodeService } from '../../../mocks/services/qrcode-service.mock';
import { FakeLocationRepository } from '../mocks/location-repository.mock';

describe('test of handler location', () => {
  it('should be created location with success', async () => {
    const handler = new LocationCommandHandler(
      new FakeLocationRepository(),
      new FakeEmailService(),
      new FakeQRCodeService(),
    );
    const command = new CreateLocationCommand(
      -23.5329,
      -46.6395,
      'São Paulo',
      'SP',
      'Brazil',
      -21.9335,
      -50.5191,
      'Tupã',
      'SP',
      'Brazil',
      'foo123',
    );

    const created = await handler.createLocationHandle(command);

    expect(created.success).toBe(true);
  });

  it('should not create successfully because idOrder already exists', async () => {
    const handler = new LocationCommandHandler(
      new FakeLocationRepository(),
      new FakeEmailService(),
      new FakeQRCodeService(),
    );
    const command = new CreateLocationCommand(
      -23.5329,
      -46.6395,
      'São Paulo',
      'SP',
      'Brazil',
      -21.9335,
      -50.5191,
      'Tupã',
      'SP',
      'Brazil',
      'location123',
    );

    const created = await handler.createLocationHandle(command);

    expect(created.success).toBe(false);
  });

  it('should be updated current place with success', async () => {
    const handler = new LocationCommandHandler(
      new FakeLocationRepository(),
      new FakeEmailService(),
      new FakeQRCodeService(),
    );
    const command = new UpdateCurrentPlaceCommand(
      'foo123',
      -23.5329,
      -46.6395,
      'São Paulo',
      'SP',
      'Brazil',
    );

    const updated = await handler.updateCurrentPlaceHandle(command);

    expect(updated.success).toBe(true);
  });
});
