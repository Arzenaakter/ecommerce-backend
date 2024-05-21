import express from 'express';
import { productsController } from './products.controller';
const router = express.Router();
router.post('/', productsController.createProduct);
router.get('/', productsController.getAllProduct);
router.get('/:productId', productsController.getSingleProduct);

export const productsRoute = router;
