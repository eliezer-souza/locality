import mongoose from 'mongoose';

const Order = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  recipientEmail: {
    type: String,
    required: true,
  },
  dateExpectedDelivery: {
    type: Date,
    required: true,
  },
  dateDelivery: {
    type: Date,
    required: true,
  },
  idLocalition: {
    type: String,
    required: false,
  },
});

export const OrderSchema = mongoose.model('orders', Order);
