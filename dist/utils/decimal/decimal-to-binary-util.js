"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDecimalToBinaryRecursive = void 0;
const convertDecimalToBinaryRecursive = (decimalNumber) => {
    if (decimalNumber === 0) {
        return '';
    }
    const remainder = decimalNumber % 2;
    return (0, exports.convertDecimalToBinaryRecursive)(Math.floor(decimalNumber / 2)) + remainder.toString();
};
exports.convertDecimalToBinaryRecursive = convertDecimalToBinaryRecursive;
