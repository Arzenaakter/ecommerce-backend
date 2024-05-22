import { Schema, model } from 'mongoose';
import { TOder } from './orders.interface';
import { productsModel } from '../products/products.model';
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

// Update the inventory quantity and inStock status based on the ordered quantity
ordersSchema.pre('save', async function (next) {
  const productId = this.productId;
  const orderedQuantity = this.quantity;

  const product = await productsModel.findById(productId);

  if (!product) {
    throw new Error('Product not found');
  }

  if (
    !product.inventory.inStock ||
    product?.inventory.quantity < orderedQuantity
  ) {
    throw new Error('Insufficient quantity available in inventory');
  }

  product.inventory.quantity -= orderedQuantity;
  product.inventory.inStock = product.inventory.quantity > 0;

  await product.save();
  next();
});

export const ordersModel = model<TOder>('orders', ordersSchema);
