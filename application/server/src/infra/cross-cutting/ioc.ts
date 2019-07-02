import { Identifier } from 'infra/cross-cutting/identifiers';
import { container } from 'tsyringe';

import { UserController } from 'api/controllers/user.controller';
import { UserRouter } from 'api/routes/user.router';
import { UserHandler } from 'domain/user/handlers/user.handler';
import UserRepository from 'infra/data/user/user.repository';

import { OrderController } from 'api/controllers/order.controller';
import { OrderRouter } from 'api/routes/order.router';
import { OrderHandler } from 'domain/order/handlers/order.handler';
import { OrderRepository } from 'infra/data/order/repositories/order.repository';

export async function registeringDependencies() {
  // Users
  await container.register(Identifier.USER_REPOSITORY, {
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

  // Orders
  await container.register(Identifier.ORDER_REPOSITORY, {
    useClass: OrderRepository,
  });

  await container.register(Identifier.ORDER_HANDLER, {
    useClass: OrderHandler,
  });

  await container.register(Identifier.ORDER_CONTROLLER, {
    useClass: OrderController,
  });

  await container.register(Identifier.ORDER_ROUTER, {
    useClass: OrderRouter,
  });
}
