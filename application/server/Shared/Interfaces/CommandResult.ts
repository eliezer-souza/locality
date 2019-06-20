export interface ICommandResult {
  success: boolean;
  message: string;
}

export class CommandResult implements ICommandResult {
  public success: boolean;
  public message: string;

  constructor(success: boolean, message: string) {
    this.success = success;
    this.message = message;
  }
}
