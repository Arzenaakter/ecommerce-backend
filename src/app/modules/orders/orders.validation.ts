import { z } from 'zod';

const ordersValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Invalid email format!'),
  productId: z.string().min(1, { message: 'Product Id is required' }),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  quantity: z
    .number()
    .min(0, { message: 'Quantity must be a positive number' }),
});

export default ordersValidationSchema;
