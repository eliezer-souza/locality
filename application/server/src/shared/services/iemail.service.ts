import { IResponse } from 'shared/interfaces/response';

export interface IEmailService {
  send: (
    to: string,
    from: string,
    subject: string,
    template?: string,
    context?: object,
  ) => Promise<IResponse>;
}
