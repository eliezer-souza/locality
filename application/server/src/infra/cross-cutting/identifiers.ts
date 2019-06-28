export abstract class Identifier {
  // Identifiers of user
  public static readonly USER_REPOSITORY: any = Symbol.for('UserRepository');
  public static readonly USER_HANDLER: any = Symbol.for('UserHandler');
  public static readonly USER_CONTROLLER: any = Symbol.for('UserController');
  public static readonly USER_ROUTER: any = Symbol.for('UserRouter');
}
