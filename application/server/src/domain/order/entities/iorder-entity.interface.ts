export interface IOrder {
  id: string;
  code: string;
  description: string;
  recipientEmail: string;
  deliveryDate: Date;
  status: string;
}
