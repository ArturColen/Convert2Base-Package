"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDecimalNumber = void 0;
const validateDecimalNumber = (decimalNumber) => {
    if (!/^\d+$/.test(decimalNumber)) {
        throw new Error('The provided decimal number is invalid. Make sure it contains only digits.');
    }
};
exports.validateDecimalNumber = validateDecimalNumber;
