"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHexadecimalToDecimalRecursive = void 0;
const convertHexadecimalToDecimalRecursive = (hexadecimalNumber, index = 0, decimalNumber = 0) => {
    if (index >= hexadecimalNumber.length) {
        return decimalNumber;
    }
    const digitValue = parseInt(hexadecimalNumber[index], 16);
    const updatedDecimal = decimalNumber * 16 + digitValue;
    return (0, exports.convertHexadecimalToDecimalRecursive)(hexadecimalNumber, index + 1, updatedDecimal);
};
exports.convertHexadecimalToDecimalRecursive = convertHexadecimalToDecimalRecursive;
