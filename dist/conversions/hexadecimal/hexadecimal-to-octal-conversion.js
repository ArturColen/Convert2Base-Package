"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToOct = void 0;
const hexadecimal_to_octal_util_1 = require("../../utils/hexadecimal/hexadecimal-to-octal-util");
const hexadecimal_number_validator_1 = require("../../validators/hexadecimal-number-validator");
const hexToOct = (hexadecimalNumber) => {
    (0, hexadecimal_number_validator_1.validateHexadecimalNumber)(hexadecimalNumber);
    const octalNumber = (0, hexadecimal_to_octal_util_1.convertHexadecimalToOctalRecursive)(hexadecimalNumber);
    return octalNumber;
};
exports.hexToOct = hexToOct;
