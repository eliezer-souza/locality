import { CreateUserCommand } from 'domain/user/commands/create-user.command';
import { User } from 'domain/user/entities/user.entity';
import { IUserRepository } from 'domain/user/repositories/iuser.repository';
import { Email } from 'domain/user/value-objects/email.value-object';
import { Name } from 'domain/user/value-objects/name.value-object';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { CommandResult } from 'shared/interfaces/command-result';
import { IResponse } from 'shared/interfaces/response';
import { autoInjectable, inject, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class UserHandler {
  private readonly _userRepository: IUserRepository;

  constructor(
    @inject(Identifier.USER_REPOSITORY)
    private userRepository?: IUserRepository,
  ) {
    this._userRepository = userRepository;
  }

  public async handle(command: CreateUserCommand): Promise<IResponse> {
    if (await this._userRepository.emailExists(command.email)) {
      return new CommandResult(false, 'E-mail already used');
    }

    const name = new Name(command.firstName, command.lastName);
    const email = new Email(command.email);

    const user = new User(name, email, command.password);

    if (!user.isValid()) {
      return new CommandResult(false, user.notifications.message.join(', '));
    }

    const response = await this._userRepository.createUser(user.data());

    if (!response.success) {
      return new CommandResult(false, response.message);
    }

    return new CommandResult(true, `User created with success`);
  }
}
