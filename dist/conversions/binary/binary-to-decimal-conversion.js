"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binToDec = void 0;
const binary_to_decimal_util_1 = require("../../utils/binary/binary-to-decimal-util");
const binary_number_validator_1 = require("../../validators/binary-number-validator");
const binToDec = (binaryNumber) => {
    (0, binary_number_validator_1.validateBinaryNumber)(binaryNumber);
    const decimalNumber = (0, binary_to_decimal_util_1.convertBinaryToDecimalRecursive)(binaryNumber);
    return decimalNumber.toString();
};
exports.binToDec = binToDec;
