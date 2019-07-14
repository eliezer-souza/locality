import qr from 'qrcode';

export async function generateQRCode(id) {
  const baseUrl = process.env.BASE_URL_APP;
  return await qr.toDataURL(`${baseUrl}${Object.values(id)}`);
}
