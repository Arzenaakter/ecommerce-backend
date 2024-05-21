import { Request, Response } from 'express';
import { ordersService } from './orders.service';
import ordersValidationSchema from './orders.validation';

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

export const orderController = {
  createOrder,
};
