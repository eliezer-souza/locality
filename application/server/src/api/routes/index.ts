import { Router } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject } from 'tsyringe';
import { UserRouter } from './user.router';
import { OrderRouter } from './order.router';

@autoInjectable()
export class Routes {
  public readonly router: Router;
  private readonly users: UserRouter;
  private readonly orders: OrderRouter;

  constructor(
    @inject(Identifier.USER_ROUTER) private userRouter?: UserRouter,
    @inject(Identifier.ORDER_ROUTER) private orderRouter?: OrderRouter,
  ) {
    this.router = Router();

    this.users = userRouter;
    this.orders = orderRouter;

    this.registeringRoutes();
  }

  registeringRoutes() {
    this.router.get('/api/hc', (req, res) => res.send('OK'));
    this.router.use('/api/users', this.users.router);

    this.router.use('/api/orders', this.orders.router);
  }
}
