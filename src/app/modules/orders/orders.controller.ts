import { Request, Response } from 'express';
import { ordersService } from './orders.service';
import ordersValidationSchema from './orders.validation';

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const OrderData = req.body;
    const zodValidation = ordersValidationSchema.parse(OrderData);
    const result = await ordersService.createOrderFromDB(zodValidation);
    return res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Order created failed !',
      error: error,
    });
  }
};

// get all products  and search by email
const getOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    const result = await ordersService.getOrderFromDB(email ?? '');

    return res.status(200).json({
      success: true,
      message: email
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to fetched all products!',
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  getOrder,
};
