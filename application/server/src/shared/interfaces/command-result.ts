import { IResponse } from './response';

export class CommandResult implements IResponse {
  public readonly success: boolean;
  public readonly message: string;
  public readonly data?: object | object[];

  constructor(success: boolean, message: string, data?: object | object[]) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}
