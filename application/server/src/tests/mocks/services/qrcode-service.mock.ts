import { IQRCodeService } from 'shared/services/iqrcode.service';

export class FakeQRCodeService implements IQRCodeService {
  async generate(value: string): Promise<any> {
    return new Promise(result => result('data:image/jpeg;base64'));
  }
}
