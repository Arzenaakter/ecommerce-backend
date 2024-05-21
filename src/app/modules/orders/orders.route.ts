import express from 'express';
import { orderController } from './orders.controller';

const router = express.Router();
router.post('/', orderController.createOrder);

export const ordersRoute = router;
