import 'reflect-metadata';

import { CreateUserCommand } from 'domain/user/commands/create-user.command';
import { UserHandler } from 'domain/user/handlers/user.handler';
import { FakeUserRepository } from '../mocks/user-repository.mock';

describe('Test of handler user', () => {
  it('should be a create user with success', async () => {
    const handler = new UserHandler(new FakeUserRepository());
    const command = new CreateUserCommand(
      'Ragnar',
      'Lothbrook',
      'ragnar@viking.com',
      'odin@123',
    );

    const created = await handler.handle(command);

    expect(created.success).toBe(true);
  });

  it('should be a not create user with success', async () => {
    const handler = new UserHandler(new FakeUserRepository());
    const command = new CreateUserCommand(
      'Ragnar',
      'Lothbrook',
      'locality@email.com',
      'odin@123',
    );

    const created = await handler.handle(command);

    expect(created.success).toBe(false);
  });
});
