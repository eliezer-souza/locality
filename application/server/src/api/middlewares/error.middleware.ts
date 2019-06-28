import { httpStatusCode } from 'constants/http.constant';
import { NextFunction, Request, Response } from 'express';
import HttpException from 'utils/http-exception.utils';

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const status = error.status || httpStatusCode.INTERNAL_ERROR;
  const message = error.message || 'Something went wrong';
  response.status(status).send({
    status,
    message,
  });
}

export default errorMiddleware;
