"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsModel = void 0;
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: [true, 'Type type is required'],
    },
    value: {
        type: String,
        required: [true, 'Value value is required'],
    },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: [true, ' Quantity is required'],
    },
    inStock: {
        type: Boolean,
        default: true,
        required: [true, 'InStock is required'],
    },
});
const productsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
    },
    tags: {
        type: [String],
        required: [true, 'tags is required'],
    },
    variants: {
        type: [variantsSchema],
        required: [true, 'Variants is required'],
    },
    inventory: {
        type: inventorySchema,
        required: [true, 'Inventory is required'],
    },
});
exports.productsModel = (0, mongoose_1.model)('products', productsSchema);
