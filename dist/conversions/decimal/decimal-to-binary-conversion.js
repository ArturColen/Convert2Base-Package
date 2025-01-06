"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decToBin = void 0;
const decimal_to_binary_util_1 = require("../../utils/decimal/decimal-to-binary-util");
const decimal_number_validator_1 = require("../../validators/decimal-number-validator");
const decToBin = (decimalNumber) => {
    (0, decimal_number_validator_1.validateDecimalNumber)(decimalNumber);
    const binaryNumber = (0, decimal_to_binary_util_1.convertDecimalToBinaryRecursive)(parseInt(decimalNumber));
    return binaryNumber || '0';
};
exports.decToBin = decToBin;
