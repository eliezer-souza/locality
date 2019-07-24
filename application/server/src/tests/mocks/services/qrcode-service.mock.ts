import { IResponse } from 'shared/interfaces/response';
import { IEmailService } from 'shared/services/iemail.service';
import { IQRCodeService } from 'src/shared/services/iqrcode.service';

export class FakeQRCodeService implements IQRCodeService {
  async generate(value: string): Promise<any> {
    return new Promise(result => result('data:image/jpeg;base64'));
  }
}
