import { Schema, model, connect } from 'mongoose';
import { TInventory, TProducts, TVariants } from './products.interface';

const variantsSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: [true, 'Type type is required'],
  },
  value: {
    type: String,
    required: [true, 'Value value is required'],
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, ' Quantity is required'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'InStock is required'],
  },
});

const productsSchema = new Schema<TProducts>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  tags: {
    type: [String],
    required: [true, 'tags is required'],
  },
  variants: {
    type: [variantsSchema],
    required: [true, 'Variants is required'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Variants is required'],
  },
});

export const productsModel = model<TProducts>('products', productsSchema);
