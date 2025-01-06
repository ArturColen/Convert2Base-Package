"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToDec = void 0;
const hexadecimal_to_decimal_util_1 = require("../../utils/hexadecimal/hexadecimal-to-decimal-util");
const hexadecimal_number_validator_1 = require("../../validators/hexadecimal-number-validator");
const hexToDec = (hexadecimalNumber) => {
    (0, hexadecimal_number_validator_1.validateHexadecimalNumber)(hexadecimalNumber);
    const decimalNumber = (0, hexadecimal_to_decimal_util_1.convertHexadecimalToDecimalRecursive)(hexadecimalNumber);
    return decimalNumber.toString();
};
exports.hexToDec = hexToDec;
