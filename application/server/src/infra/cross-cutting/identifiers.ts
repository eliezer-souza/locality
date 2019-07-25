export abstract class Identifier {
  // EmailService
  public static readonly EMAIL_SERVICE: any = Symbol.for('EmailService');

  // QRCodeService
  public static readonly QRCODE_SERVICE: any = Symbol.for('QRCodeService');

  // Identifiers of orders
  public static readonly ORDER_REPOSITORY: any = Symbol.for('OrderRepository');
  public static readonly ORDER_COMMAND_HANDLER: any = Symbol.for(
    'OrderCommandHandler',
  );
  public static readonly ORDER_CONTROLLER: any = Symbol.for('OrderController');
  public static readonly ORDER_ROUTER: any = Symbol.for('OrderRouter');

  // Identifiers of location
  public static readonly LOCATION_REPOSITORY: any = Symbol.for(
    'LocationRepository',
  );
  public static readonly LOCATION_COMMAND_HANDLER: any = Symbol.for(
    'LocationCommandHandler',
  );
  public static readonly LOCATION_CONTROLLER: any = Symbol.for(
    'LocationController',
  );
  public static readonly LOCATION_ROUTER: any = Symbol.for('LocationRouter');
}
