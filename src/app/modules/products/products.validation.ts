import { z } from 'zod';

const variantsValidationSchema = z.object({
  type: z.string().min(1, 'Type is required'),
  value: z.string().min(1, 'Value is required'),
});

const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .min(0, { message: 'Quantity must be a positive number' }),
  inStock: z.boolean().default(true),
});

const productValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).min(1, { message: 'At least one tag is required' }),
  variants: z.array(variantsValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
