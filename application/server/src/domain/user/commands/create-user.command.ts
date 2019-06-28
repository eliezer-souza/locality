import { Command } from 'shared/commands/command';

export class CreateUserCommand extends Command {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
