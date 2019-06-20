import { CreateUserCommand } from 'Domain/User/Commands/CreateUserCommand';
import { User } from 'Domain/User/Entities/User';
import { IUserRepository } from 'Domain/User/Repositories/IUserRepository';
import { Email } from 'Domain/User/ValueObjects/Email';
import { Name } from 'Domain/User/ValueObjects/Name';
import { CommandResult, ICommandResult } from 'Shared/Interfaces/CommandResult';

export class UserHandler {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  public handle(command: CreateUserCommand): ICommandResult {
    if (this._userRepository.emailExists(command.email)) {
      return new CommandResult(false, 'E-mail already used');
    }

    const name = new Name(command.firstName, command.lastName);
    const email = new Email(command.email);

    const user = new User(name, email, command.password);

    if (!user.isValid()) {
      return new CommandResult(false, user.notifications.message.join(', '));
    }

    this._userRepository.createUser(user);

    return new CommandResult(true, 'User created with success');
  }
}
