import { Identifier } from 'infra/cross-cutting/identifiers';
import { container } from 'tsyringe';

import { SendgridEmailService } from 'infra/services/email/sendgrid.email';

import { OrderController } from 'api/controllers/order.controller';
import { OrderRouter } from 'api/routes/order.router';
import { OrderHandler } from 'domain/order/handlers/order.handler';
import { OrderRepository } from 'infra/data/order/repositories/order.repository';

import { LocationController } from 'api/controllers/location.controller';
import { LocationRouter } from 'api/routes/location.router';
import { LocationHandler } from 'domain/location/handlers/location.handler';
import { LocationRepository } from 'infra/data/location/repositories/location.repository';

export async function registeringDependencies() {
  // Email Service
  await container.register(Identifier.EMAIL_SERVICE, {
    useClass: SendgridEmailService,
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

  // Location
  await container.register(Identifier.LOCATION_REPOSITORY, {
    useClass: LocationRepository,
  });

  await container.register(Identifier.LOCATION_HANDLER, {
    useClass: LocationHandler,
  });

  await container.register(Identifier.LOCATION_CONTROLLER, {
    useClass: LocationController,
  });

  await container.register(Identifier.LOCATION_ROUTER, {
    useClass: LocationRouter,
  });
}
