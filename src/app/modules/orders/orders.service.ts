import { TOder } from './orders.interface';
import { ordersModel } from './orders.model';

const createOrderFromDB = async (order: TOder) => {
  const result = await ordersModel.create(order);
  return result;
};

// get order
const getOrderFromDB = async (email: string) => {
  if (email) {
    const result = await ordersModel.find({ email });
    return result;
  } else {
    const result = await ordersModel.find();
    return result;
  }
};

export const ordersService = {
  createOrderFromDB,
  getOrderFromDB,
};
