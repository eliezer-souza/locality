import 'reflect-metadata';

import { CreateLocationCommand } from 'domain/location/commands/create-location.command';
import { LocationHandler } from 'domain/location/handlers/location.handler';
import { FakeLocationRepository } from '../mocks/location-repository.mock';

describe('test of handler location', () => {
  it('should be created location with success', async () => {
    const handler = new LocationHandler(new FakeLocationRepository());
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

    const created = await handler.handle(command);

    expect(created.success).toBe(true);
  });

  it('should not create successfully because idOrder already exists', async () => {
    const handler = new LocationHandler(new FakeLocationRepository());
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

    const created = await handler.handle(command);

    expect(created.success).toBe(false);
  });
});
