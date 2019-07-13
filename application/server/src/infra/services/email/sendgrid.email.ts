import nodemailer from 'nodemailer';
import transport from 'nodemailer-sendgrid-transport';
import { IResponse } from 'shared/interfaces/response';
import { IEmailService } from 'shared/services/iemail.service';
import { singleton } from 'tsyringe';

@singleton()
export class SendgridEmailService implements IEmailService {
  private readonly client: any;
  private readonly options: object = {
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  };

  constructor() {
    this.client = nodemailer.createTransport(transport(this.options));
  }

  public async send(
    to: string,
    subject: string,
    from: string = 'no-reply@locality.com.br',
    template?: string,
    context?: object,
  ): Promise<IResponse> {
    try {
      const email = {
        from,
        to,
        subject,
        template,
        context,
      };

      await this.client.sendMail(email);

      return { success: true };
    } catch (error) {
      return { success: false, message: error };
    }
  }
}
