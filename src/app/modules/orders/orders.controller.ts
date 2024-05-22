import { Request, Response } from 'express';
import { ordersService } from './orders.service';
import ordersValidationSchema from './orders.validation';
import { productsModel } from '../products/products.model';

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const OrderData = req.body;
    const zodValidation = ordersValidationSchema.parse(OrderData);

    // Check if the product exists and is in stock
    const product = await productsModel.findById(zodValidation.productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Order not found!',
      });
    }

    if (!product.inventory.inStock) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }
    const result = await ordersService.createOrderFromDB(zodValidation);
    return res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Order created failed !',
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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to fetched orders!',
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  getOrder,
};
