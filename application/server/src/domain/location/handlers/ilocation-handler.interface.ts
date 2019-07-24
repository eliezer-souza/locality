import { CreateLocationCommand } from 'domain/location/commands/create-location.command';
import { UpdateCurrentPlaceCommand } from 'domain/location/commands/update-current-place.command';
import { IResponse } from 'shared/interfaces/response';

export interface ILocationHandler {
  createLocationHandle: (command: CreateLocationCommand) => Promise<IResponse>;
  updateCurrentPlaceHandle: (
    command: UpdateCurrentPlaceCommand,
  ) => Promise<IResponse>;
}
