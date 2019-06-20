import { Command } from 'Shared/Commands/Command';

export class CreateUserCommand extends Command {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
}
