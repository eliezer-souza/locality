import { httpStatusCode } from 'constants/http.constant';
import { CreateUserCommand } from 'domain/user/commands/create-user.command';
import { UserHandler } from 'domain/user/handlers/user.handler';
import { NextFunction, Request, Response } from 'express';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { autoInjectable, inject } from 'tsyringe';

@autoInjectable()
export class UserController {
  private handler: UserHandler;

  constructor(
    @inject(Identifier.USER_HANDLER) private userHandler?: UserHandler,
  ) {
    this.handler = userHandler;
  }

  create = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { firstName, lastName, email, password } = request.body;

      const command = new CreateUserCommand(
        firstName,
        lastName,
        email,
        password,
      );

      const user = await this.handler.handle(command);

      if (!user.success) {
        return response.status(httpStatusCode.BAD_REQUEST).send(user);
      }

      return response.status(httpStatusCode.CREATED).json(user);
    } catch (error) {
      return next(error);
    }
  };
}
