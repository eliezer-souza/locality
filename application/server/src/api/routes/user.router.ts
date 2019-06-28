import { UserController } from 'api/controllers/user.controller';
import { Router } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class UserRouter {
  public router: Router;
  private readonly controller: UserController;

  constructor(
    @inject(Identifier.USER_CONTROLLER) private userController?: UserController,
  ) {
    this.controller = userController;
    this.router = Router();

    this.registeringRoutes();
  }

  registeringRoutes() {
    this.router.post('/', this.controller.create);
  }
}
