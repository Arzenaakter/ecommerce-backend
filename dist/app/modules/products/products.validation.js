"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const variantsValidationSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, 'Type is required'),
    value: zod_1.z.string().min(1, 'Value is required'),
});
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z
        .number()
        .min(0, { message: 'Quantity must be a positive number' }),
    inStock: zod_1.z.boolean().default(true),
});
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    description: zod_1.z.string().min(1, 'Description is required'),
    price: zod_1.z.number().min(0, { message: 'Price must be a positive number' }),
    category: zod_1.z.string().min(1, 'Category is required'),
    tags: zod_1.z.array(zod_1.z.string()).min(1, { message: 'At least one tag is required' }),
    variants: zod_1.z.array(variantsValidationSchema),
    inventory: inventoryValidationSchema,
});
exports.default = productValidationSchema;
