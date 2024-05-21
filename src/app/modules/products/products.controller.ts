import { Request, Response } from 'express';
import { productService } from './products.service';
import productValidationSchema from './products.validation';

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodValidationProductData = productValidationSchema.parse(productData);
    const result = await productService.createProductFromDB(
      zodValidationProductData,
    );

    return res.status(201).json({
      success: true,
      message: 'Product created successfully!',
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

// get all products
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductFromDB();

    return res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
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

// get all products
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProductFromDB(productId);

    return res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
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
  getAllProduct,
  getSingleProduct,
};
