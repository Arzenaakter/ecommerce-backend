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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product created failed !',
      error: error,
    });
  }
};

// get all products
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;

    const result = await productService.getAllProductFromDB(searchTerm ?? '');

    return res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term  ' ${searchTerm} ' fetched successfully!`
        : 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to fetched all products!',
      error: error,
    });
  }
};

// get single  product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProductFromDB(productId);

    return res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product not found !',
      error: error,
    });
  }
};

// update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productInfo = req.body;
    const zodValidationProductData = productValidationSchema.parse(productInfo);
    const product = await productService.getSingleProductFromDB(productId);
    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'Product not found !',
      });
    }
    const result = await productService.updateProductById(
      productId,
      zodValidationProductData,
    );

    return res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product updated failed',
      error: error,
    });
  }
};

// delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.deleteProductById(productId);

    return res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product not found !',
      error: error,
    });
  }
};

export const productsController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
