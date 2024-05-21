import { TProducts } from './products.interface';
import { productsModel } from './products.model';

const createProductFromDB = async (productData: TProducts) => {
  const result = await productsModel.create(productData);
  return result;
};

export const productService = {
  createProductFromDB,
};
