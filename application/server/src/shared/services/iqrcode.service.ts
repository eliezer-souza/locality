export interface IQRCodeService {
  generate: (value: string) => Promise<any>;
}
