"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binToHex = void 0;
const decimal_to_hexadecimal_util_1 = require("../../utils/decimal/decimal-to-hexadecimal-util");
const binary_number_validator_1 = require("../../validators/binary-number-validator");
const binary_to_decimal_conversion_1 = require("./binary-to-decimal-conversion");
const binToHex = (binaryNumber) => {
    (0, binary_number_validator_1.validateBinaryNumber)(binaryNumber);
    const decimalNumber = parseInt((0, binary_to_decimal_conversion_1.binToDec)(binaryNumber));
    const hexadecimalNumber = (0, decimal_to_hexadecimal_util_1.convertDecimalToHexadecimalRecursive)(decimalNumber).toUpperCase();
    return hexadecimalNumber || '0';
};
exports.binToHex = binToHex;
