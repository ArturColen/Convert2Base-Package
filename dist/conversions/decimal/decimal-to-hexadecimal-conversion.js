"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decToHex = void 0;
const decimal_to_hexadecimal_util_1 = require("../../utils/decimal/decimal-to-hexadecimal-util");
const decimal_number_validator_1 = require("../../validators/decimal-number-validator");
const decToHex = (decimalNumber) => {
    (0, decimal_number_validator_1.validateDecimalNumber)(decimalNumber);
    const hexadecimalNumber = (0, decimal_to_hexadecimal_util_1.convertDecimalToHexadecimalRecursive)(parseInt(decimalNumber));
    return hexadecimalNumber || '0';
};
exports.decToHex = decToHex;
