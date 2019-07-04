import { LocationController } from 'api/controllers/location.controller';
import { Router } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class LocationRouter {
  public router: Router;
  private readonly controller: LocationController;

  constructor(
    @inject(Identifier.LOCATION_CONTROLLER)
    private locationController?: LocationController,
  ) {
    this.controller = locationController;
    this.router = Router();

    this.registeringRoutes();
  }

  registeringRoutes() {
    this.router.post('/', this.controller.create);
  }
}
