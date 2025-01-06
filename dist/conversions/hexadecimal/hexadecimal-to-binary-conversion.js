"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToBin = void 0;
const hexadecimal_to_binary_util_1 = require("../../utils/hexadecimal/hexadecimal-to-binary-util");
const hexadecimal_number_validator_1 = require("../../validators/hexadecimal-number-validator");
const hexToBin = (hexadecimalNumber) => {
    (0, hexadecimal_number_validator_1.validateHexadecimalNumber)(hexadecimalNumber);
    const binaryNumber = (0, hexadecimal_to_binary_util_1.convertHexadecimalToBinaryRecursive)(hexadecimalNumber);
    return binaryNumber;
};
exports.hexToBin = hexToBin;
