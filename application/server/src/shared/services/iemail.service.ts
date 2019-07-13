import { IResponse } from 'shared/interfaces/response';

export interface IEmailService {
  send: (
    to: string,
    subject: string,
    from?: string,
    template?: string,
    context?: object,
  ) => Promise<IResponse>;
}
