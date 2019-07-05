import { LocationRouter } from 'api/routes/location.router';
import { OrderRouter } from 'api/routes/order.router';
import { Router } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject } from 'tsyringe';

@autoInjectable()
export class Routes {
  public readonly router: Router;
  private readonly orders: OrderRouter;
  private readonly location: LocationRouter;

  constructor(
    @inject(Identifier.ORDER_ROUTER) private orderRouter?: OrderRouter,
    @inject(Identifier.LOCATION_ROUTER) private locationRouter?: LocationRouter,
  ) {
    this.router = Router();

    this.orders = orderRouter;
    this.location = locationRouter;

    this.registeringRoutes();
  }

  registeringRoutes() {
    this.router.get('/api/hc', (req, res) => res.send('OK'));
    this.router.use('/api/orders', this.orders.router);
    this.router.use('/api/locations', this.location.router);
  }
}
