"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decToOct = void 0;
const decimal_to_octal_util_1 = require("../../utils/decimal/decimal-to-octal-util");
const decimal_number_validator_1 = require("../../validators/decimal-number-validator");
const decToOct = (decimalNumber) => {
    (0, decimal_number_validator_1.validateDecimalNumber)(decimalNumber);
    const octalNumber = (0, decimal_to_octal_util_1.convertDecimalToOctalRecursive)(parseInt(decimalNumber));
    return octalNumber || '0';
};
exports.decToOct = decToOct;
