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
exports.ordersService = void 0;
const orders_model_1 = require("./orders.model");
const createOrderFromDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.ordersModel.create(order);
    return result;
});
// get order
const getOrderFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const result = yield orders_model_1.ordersModel.find({ email });
        return result;
    }
    else {
        const result = yield orders_model_1.ordersModel.find();
        return result;
    }
});
exports.ordersService = {
    createOrderFromDB,
    getOrderFromDB,
};
