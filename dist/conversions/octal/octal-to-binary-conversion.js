"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.octToBin = void 0;
const octal_to_binary_util_1 = require("../../utils/octal/octal-to-binary-util");
const octal_number_validator_1 = require("../../validators/octal-number-validator");
const octToBin = (octalNumber) => {
    (0, octal_number_validator_1.validateOctalNumber)(octalNumber);
    const binaryNumber = (0, octal_to_binary_util_1.convertOctalToBinaryRecursive)(octalNumber);
    return binaryNumber;
};
exports.octToBin = octToBin;
