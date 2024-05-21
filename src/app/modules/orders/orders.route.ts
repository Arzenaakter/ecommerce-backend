import express from 'express';
import { orderController } from './orders.controller';

const router = express.Router();
router.post('/', orderController.createOrder);
router.get('/', orderController.getOrder);

export const ordersRoute = router;
