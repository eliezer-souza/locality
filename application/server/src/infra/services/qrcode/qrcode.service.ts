import qr from 'qrcode';

export async function generateQRCode(value) {
  return await qr.toDataURL(value);
}
