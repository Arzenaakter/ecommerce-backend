import { TProducts } from './products.interface';
import { productsModel } from './products.model';

// create product
const createProductFromDB = async (productData: TProducts) => {
  const result = await productsModel.create(productData);

  return result;
};

// get all products
const getAllProductFromDB = async () => {
  const result = await productsModel.find();
  return result;
};
// get single  product
const getSingleProductFromDB = async (id: string) => {
  const result = await productsModel.findById(id);
  return result;
};

export const productService = {
  createProductFromDB,
  getAllProductFromDB,
  getSingleProductFromDB,
};
