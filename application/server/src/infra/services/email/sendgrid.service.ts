import fs from 'fs';
import hbs from 'handlebars';
import nodemailer from 'nodemailer';
import transport from 'nodemailer-sendgrid-transport';
import path from 'path';
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

  private loadTemplate(nameTemplate: string, context: object) {
    const file = fs.readFileSync(
      path.join('./src/views', `${nameTemplate}.hbs`),
      'utf8',
    );

    return hbs.compile(file)(context);
  }

  public async send(
    to: string,
    from: string = 'no-reply@locality.com.br',
    subject: string,
    template?: string,
    context?: object,
  ): Promise<IResponse> {
    try {
      const email = {
        to,
        from,
        subject,
        template,
        context,
      };

      const templateHtml = this.loadTemplate(template, context);
      await this.client.sendMail({ ...email, html: templateHtml });

      return { success: true };
    } catch (error) {
      return { success: false, message: error };
    }
  }
}
