import { z } from 'zod';

const variantsValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean().default(true),
});

const productValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()).min(1, { message: 'At least one tag is required' }),
  variants: z.array(variantsValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
