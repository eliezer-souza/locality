import { Router } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject } from 'tsyringe';
import { UserRouter } from './user.router';
import { OrderRouter } from './order.router';
import { LocationRouter } from './location.router';

@autoInjectable()
export class Routes {
  public readonly router: Router;
  private readonly users: UserRouter;
  private readonly orders: OrderRouter;
  private readonly location: LocationRouter;

  constructor(
    @inject(Identifier.USER_ROUTER) private userRouter?: UserRouter,
    @inject(Identifier.ORDER_ROUTER) private orderRouter?: OrderRouter,
    @inject(Identifier.LOCATION_ROUTER) private locationRouter?: LocationRouter,
  ) {
    this.router = Router();

    this.users = userRouter;
    this.orders = orderRouter;
    this.location = locationRouter;

    this.registeringRoutes();
  }

  registeringRoutes() {
    this.router.get('/api/hc', (req, res) => res.send('OK'));
    this.router.use('/api/users', this.users.router);
    this.router.use('/api/orders', this.orders.router);
    this.router.use('/api/location', this.location.router);
  }
}
