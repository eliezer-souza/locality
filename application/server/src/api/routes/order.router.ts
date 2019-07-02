import { OrderController } from 'api/controllers/order.controller';
import { Router } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class OrderRouter {
  public router: Router;
  private readonly controller: OrderController;

  constructor(
    @inject(Identifier.ORDER_CONTROLLER)
    private orderController?: OrderController,
  ) {
    this.controller = orderController;
    this.router = Router();

    this.registeringRoutes();
  }

  private registeringRoutes() {
    this.router.post('/', this.controller.create);
  }
}
