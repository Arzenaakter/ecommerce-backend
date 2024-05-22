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
exports.productService = void 0;
const products_model_1 = require("./products.model");
// create product
const createProductFromDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productsModel.create(productData);
    return result;
});
// get all products
const getAllProductFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const result = yield products_model_1.productsModel.find({
            name: { $regex: searchTerm, $options: 'i' },
        });
        return result;
    }
    else {
        const result = yield products_model_1.productsModel.find();
        return result;
    }
});
// get single  product
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productsModel.findById(id);
    return result;
});
// update product
const updateProductById = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_model_1.productsModel.findByIdAndUpdate(id, productData);
    return products;
});
// delete product
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productsModel.findByIdAndDelete(id);
    return result;
});
exports.productService = {
    createProductFromDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateProductById,
    deleteProductById,
};
