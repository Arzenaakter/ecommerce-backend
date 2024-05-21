import { Schema, model, connect } from 'mongoose';
import { TOder } from './orders.interface';
const ordersSchema = new Schema<TOder>({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  productId: {
    type: String,
    required: [true, 'ProductId  is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price  is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
});
export const ordersModel = model<TOder>('orders', ordersSchema);
