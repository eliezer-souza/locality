import { CreateUserCommand } from 'Domain/User/Commands/CreateUserCommand';
import { UserHandler } from 'Domain/User/Handlers/UserHandler';
import { FakeUserRepository } from '../Mocks/FakeUserRepository';

describe('Test of handler user', () => {
  it('should be a create user with success', () => {
    const handler = new UserHandler(new FakeUserRepository());
    const command = new CreateUserCommand();
    command.firstName = 'Ragnar';
    command.lastName = 'Lothbrook';
    command.email = 'ragnar@viking.com';
    command.password = 'odin@123';

    const created = handler.handle(command);

    expect(created.success).toBe(true);
  });

  it('should be a not create user with success', () => {
    const handler = new UserHandler(new FakeUserRepository());
    const command = new CreateUserCommand();
    command.firstName = 'Ragnar';
    command.lastName = 'Lothbrook';
    command.email = 'locality@email.com';
    command.password = 'odin@123';

    const created = handler.handle(command);

    expect(created.success).toBe(false);
  });
});
