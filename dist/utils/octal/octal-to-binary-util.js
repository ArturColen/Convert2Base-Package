"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertOctalToBinaryRecursive = void 0;
const decimal_to_binary_conversion_1 = require("../../conversions/decimal/decimal-to-binary-conversion");
const octal_to_decimal_conversion_1 = require("../../conversions/octal/octal-to-decimal-conversion");
const convertOctalToBinaryRecursive = (octalNumber, index = 0, binaryNumber = '') => {
    if (index >= octalNumber.length) {
        const decimalNumber = (0, octal_to_decimal_conversion_1.octToDec)(octalNumber);
        return (0, decimal_to_binary_conversion_1.decToBin)(decimalNumber.toString());
    }
    const digit = parseInt(octalNumber[index], 8);
    const binaryDigit = (0, decimal_to_binary_conversion_1.decToBin)(digit.toString());
    return (0, exports.convertOctalToBinaryRecursive)(octalNumber, index + 1, binaryNumber + binaryDigit);
};
exports.convertOctalToBinaryRecursive = convertOctalToBinaryRecursive;
