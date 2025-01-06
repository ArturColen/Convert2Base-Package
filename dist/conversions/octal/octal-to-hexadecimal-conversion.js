"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.octToHex = void 0;
const octal_to_decimal_util_1 = require("../../utils/octal/octal-to-decimal-util");
const octal_number_validator_1 = require("../../validators/octal-number-validator");
const octToHex = (octalNumber) => {
    (0, octal_number_validator_1.validateOctalNumber)(octalNumber);
    const decimalNumber = (0, octal_to_decimal_util_1.convertOctalToDecimalRecursive)(octalNumber);
    const hexadecimalNumber = decimalNumber.toString(16);
    return hexadecimalNumber.toUpperCase();
};
exports.octToHex = octToHex;
