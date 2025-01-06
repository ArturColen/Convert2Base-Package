"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHexadecimalToBinaryRecursive = void 0;
const decimal_to_binary_conversion_1 = require("../../conversions/decimal/decimal-to-binary-conversion");
const convertHexadecimalToBinaryRecursive = (hexadecimalNumber, index = 0, binaryNumber = '') => {
    if (index >= hexadecimalNumber.length) {
        return binaryNumber;
    }
    const digit = parseInt(hexadecimalNumber[index], 16);
    const binaryDigit = (0, decimal_to_binary_conversion_1.decToBin)(digit.toString()).padStart(4, '0');
    return (0, exports.convertHexadecimalToBinaryRecursive)(hexadecimalNumber, index + 1, binaryNumber + binaryDigit);
};
exports.convertHexadecimalToBinaryRecursive = convertHexadecimalToBinaryRecursive;
