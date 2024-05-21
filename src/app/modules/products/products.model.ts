import { Schema, model, connect } from 'mongoose';
import { TProducts } from './products.interface';

const productsSchema = new Schema<TProducts>({});

export const productsModel = model<TProducts>('products', productsSchema);
