import { Request, Response } from 'express';
import { productService } from './products.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const result = await productService.createProductFromDB(productData);
    res.status(200).json({
      success: true,
      message: ' Get all products successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong !',
      error: error,
    });
    console.log(error);
  }
};

export const productsController = {
  createProduct,
};
