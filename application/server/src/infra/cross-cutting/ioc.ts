import { UserController } from 'api/controllers/user.controller';
import { UserRouter } from 'api/routes/user.router';
import { UserHandler } from 'domain/user/handlers/user.handler';
import { IUserRepository } from 'domain/user/repositories/iuser.repository';
import { Identifier } from 'infra/cross-cutting/identifiers';
import UserRepository from 'infra/data/user/user.repository';
import { container } from 'tsyringe';

export async function registeringDependencies() {
  await container.register<IUserRepository>(Identifier.USER_REPOSITORY, {
    useClass: UserRepository,
  });

  await container.register(Identifier.USER_HANDLER, {
    useClass: UserHandler,
  });

  await container.register(Identifier.USER_CONTROLLER, {
    useClass: UserController,
  });

  await container.register(Identifier.USER_ROUTER, {
    useClass: UserRouter,
  });
}
