"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binToOct = void 0;
const decimal_to_octal_util_1 = require("../../utils/decimal/decimal-to-octal-util");
const binary_number_validator_1 = require("../../validators/binary-number-validator");
const binary_to_decimal_conversion_1 = require("./binary-to-decimal-conversion");
const binToOct = (binaryNumber) => {
    (0, binary_number_validator_1.validateBinaryNumber)(binaryNumber);
    const decimalNumber = parseInt((0, binary_to_decimal_conversion_1.binToDec)(binaryNumber));
    const octalNumber = (0, decimal_to_octal_util_1.convertDecimalToOctalRecursive)(decimalNumber);
    return octalNumber;
};
exports.binToOct = binToOct;
