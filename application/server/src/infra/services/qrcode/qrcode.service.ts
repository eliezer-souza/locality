import qr from 'qrcode';
import { IQRCodeService } from 'shared/services/iqrcode.service';
import { singleton } from 'tsyringe';

@singleton()
export class QRCodeService implements IQRCodeService {
  public async generate(value: string): Promise<any> {
    return await qr.toDataURL(value);
  }
}
