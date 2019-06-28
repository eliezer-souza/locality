import { Router } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject } from 'tsyringe';
import { UserRouter } from './user.router';

@autoInjectable()
export class Routes {
  public readonly router: Router;
  private readonly users: UserRouter;

  constructor(@inject(Identifier.USER_ROUTER) private userRouter?: UserRouter) {
    this.users = userRouter;
    this.router = Router();

    this.registeringRoutes();
  }

  registeringRoutes() {
    this.router.get('/api/hc', (req, res) => res.send('OK'));
    this.router.use('/api/users', this.users.router);
  }
}
