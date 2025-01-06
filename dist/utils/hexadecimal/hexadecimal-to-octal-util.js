"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHexadecimalToOctalRecursive = void 0;
const binary_to_octal_conversion_1 = require("../../conversions/binary/binary-to-octal-conversion");
const hexadecimal_to_binary_conversion_1 = require("../../conversions/hexadecimal/hexadecimal-to-binary-conversion");
const convertHexadecimalToOctalRecursive = (hexadecimalNumber, index = 0, binaryNumber = '') => {
    if (index >= hexadecimalNumber.length) {
        const octalNumber = (0, binary_to_octal_conversion_1.binToOct)(binaryNumber);
        return octalNumber;
    }
    const binaryDigit = (0, hexadecimal_to_binary_conversion_1.hexToBin)(hexadecimalNumber[index]);
    const updatedBinary = binaryNumber + binaryDigit;
    return (0, exports.convertHexadecimalToOctalRecursive)(hexadecimalNumber, index + 1, updatedBinary);
};
exports.convertHexadecimalToOctalRecursive = convertHexadecimalToOctalRecursive;
