export abstract class Identifier {
  // Identifiers of orders
  public static readonly ORDER_REPOSITORY: any = Symbol.for('OrderRepository');
  public static readonly ORDER_HANDLER: any = Symbol.for('OrderHandler');
  public static readonly ORDER_CONTROLLER: any = Symbol.for('OrderController');
  public static readonly ORDER_ROUTER: any = Symbol.for('OrderRouter');

  // Identifiers of location
  public static readonly LOCATION_REPOSITORY: any = Symbol.for(
    'LocationRepository',
  );
  public static readonly LOCATION_HANDLER: any = Symbol.for('LocationHandler');
  public static readonly LOCATION_CONTROLLER: any = Symbol.for(
    'LocationController',
  );
  public static readonly LOCATION_ROUTER: any = Symbol.for('LocationRouter');
}
