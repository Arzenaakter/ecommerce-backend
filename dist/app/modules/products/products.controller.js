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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
const products_service_1 = require("./products.service");
const products_validation_1 = __importDefault(require("./products.validation"));
// create product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const zodValidationProductData = products_validation_1.default.parse(productData);
        const result = yield products_service_1.productService.createProductFromDB(zodValidationProductData);
        return res.status(201).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Product created failed !',
            error: error,
        });
    }
});
// get all products
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield products_service_1.productService.getAllProductFromDB(searchTerm !== null && searchTerm !== void 0 ? searchTerm : '');
        return res.status(200).json({
            success: true,
            message: searchTerm
                ? `Products matching search term  ' ${searchTerm} ' fetched successfully!`
                : 'Products fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to fetched all products!',
            error: error,
        });
    }
});
// get single  product
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield products_service_1.productService.getSingleProductFromDB(productId);
        return res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Product not found !',
            error: error,
        });
    }
});
// update product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productInfo = req.body;
        const zodValidationProductData = products_validation_1.default.parse(productInfo);
        const product = yield products_service_1.productService.getSingleProductFromDB(productId);
        if (!product) {
            return res.status(400).json({
                success: false,
                message: 'Product not found !',
            });
        }
        const result = yield products_service_1.productService.updateProductById(productId, zodValidationProductData);
        return res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Product updated failed',
            error: error,
        });
    }
});
// delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield products_service_1.productService.deleteProductById(productId);
        return res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Product not found !',
            error: error,
        });
    }
});
exports.productsController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
