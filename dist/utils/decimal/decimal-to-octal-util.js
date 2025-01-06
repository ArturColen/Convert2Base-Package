"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDecimalToOctalRecursive = void 0;
const convertDecimalToOctalRecursive = (decimalNumber) => {
    if (decimalNumber === 0) {
        return '';
    }
    const remainder = decimalNumber % 8;
    return (0, exports.convertDecimalToOctalRecursive)(Math.floor(decimalNumber / 8)) + remainder.toString();
};
exports.convertDecimalToOctalRecursive = convertDecimalToOctalRecursive;
