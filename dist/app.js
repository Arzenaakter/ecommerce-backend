"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_route_1 = require("./app/modules/products/products.route");
const orders_route_1 = require("./app/modules/orders/orders.route");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api/products', products_route_1.productsRoute);
app.use('/api/orders', orders_route_1.ordersRoute);
app.get('/', (req, res) => {
    res.send('Server is running!');
});
// not found route
app.get('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});
exports.default = app;
