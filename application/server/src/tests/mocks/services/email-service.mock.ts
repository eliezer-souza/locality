import { IResponse } from 'shared/interfaces/response';
import { IEmailService } from 'shared/services/iemail.service';

export class FakeEmailService implements IEmailService {
  async send(
    to: string,
    from: string,
    subject: string,
    template?: string,
    context?: object,
  ): Promise<IResponse> {
    return new Promise(result => result({ success: true }));
  }
}
