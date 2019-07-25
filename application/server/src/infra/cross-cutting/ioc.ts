import { Identifier } from 'infra/cross-cutting/identifiers';
import { container } from 'tsyringe';

import { SendgridEmailService } from 'infra/services/email/sendgrid.service';
import { QRCodeService } from 'infra/services/qrcode/qrcode.service';

import { OrderController } from 'api/controllers/order.controller';
import { OrderRouter } from 'api/routes/order.router';
import { OrderCommandHandler } from 'domain/order/handlers/commands/order-command.handler';
import { OrderRepository } from 'infra/data/order/repositories/order.repository';

import { LocationController } from 'api/controllers/location.controller';
import { LocationRouter } from 'api/routes/location.router';
import { LocationCommandHandler } from 'domain/location/handlers/commands/location-command.handler';
import { OrderQueryHandler } from 'domain/order/handlers/queries/order-query.handler';
import { LocationRepository } from 'infra/data/location/repositories/location.repository';

export async function registeringDependencies() {
  // Email Service
  await container.register(Identifier.EMAIL_SERVICE, {
    useClass: SendgridEmailService,
  });

  // QRCode Service
  await container.register(Identifier.QRCODE_SERVICE, {
    useClass: QRCodeService,
  });

  // Orders
  await container.register(Identifier.ORDER_REPOSITORY, {
    useClass: OrderRepository,
  });

  await container.register(Identifier.ORDER_COMMAND_HANDLER, {
    useClass: OrderCommandHandler,
  });

  await container.register(Identifier.ORDER_QUERY_HANDLER, {
    useClass: OrderQueryHandler,
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

  await container.register(Identifier.LOCATION_COMMAND_HANDLER, {
    useClass: LocationCommandHandler,
  });

  await container.register(Identifier.LOCATION_CONTROLLER, {
    useClass: LocationController,
  });

  await container.register(Identifier.LOCATION_ROUTER, {
    useClass: LocationRouter,
  });
}
