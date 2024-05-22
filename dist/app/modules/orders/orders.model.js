"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersModel = void 0;
const mongoose_1 = require("mongoose");
const products_model_1 = require("../products/products.model");
const ordersSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    productId: {
        type: String,
        required: [true, 'ProductId  is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price  is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
    },
});
// Update the inventory quantity and inStock status based on the ordered quantity
ordersSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const productId = this.productId;
        const orderedQuantity = this.quantity;
        const product = yield products_model_1.productsModel.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        if ((product === null || product === void 0 ? void 0 : product.inventory.quantity) < orderedQuantity) {
            throw new Error('Insufficient quantity available in inventory');
        }
        product.inventory.quantity -= orderedQuantity;
        product.inventory.inStock = product.inventory.quantity > 0;
        yield product.save();
        next();
    });
});
exports.ordersModel = (0, mongoose_1.model)('orders', ordersSchema);
