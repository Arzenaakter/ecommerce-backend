import { z } from 'zod';
const ordersValidationSchema = z.object({
  email: z
    .string({ message: 'Email is required' })
    .email('Invalid email format!'),
  productId: z.string({ message: 'Product Id is required' }),
  price: z.number({ message: 'Price is required' }),
  quantity: z.number({ message: 'Quantity is required' }),
});

export default ordersValidationSchema;
