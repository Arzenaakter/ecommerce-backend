import { TOder } from './orders.interface';
import { ordersModel } from './orders.model';

const createOrderFromDB = async (order: TOder) => {
  const result = await ordersModel.create(order);
  return result;
};

export const ordersService = {
  createOrderFromDB,
};
