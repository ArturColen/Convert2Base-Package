"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDecimalToHexadecimalRecursive = void 0;
const convertDecimalToHexadecimalRecursive = (decimalNumber) => {
    if (decimalNumber === 0) {
        return '';
    }
    const remainder = decimalNumber % 16;
    const hexadecimalDigit = remainder.toString(16).toUpperCase();
    return (0, exports.convertDecimalToHexadecimalRecursive)(Math.floor(decimalNumber / 16)) + hexadecimalDigit;
};
exports.convertDecimalToHexadecimalRecursive = convertDecimalToHexadecimalRecursive;
