import { CreateLocationCommand } from 'domain/location/commands/create-location.command';
import { IResponse } from 'shared/interfaces/response';

export interface ILocationHandler {
  createLocationHandle: (command: CreateLocationCommand) => Promise<IResponse>;
}
