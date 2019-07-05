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
  deliveryDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['progress', 'delivered'],
  },
});

export const OrderSchema = mongoose.model('orders', Order);
