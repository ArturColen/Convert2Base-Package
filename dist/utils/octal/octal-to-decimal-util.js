"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertOctalToDecimalRecursive = void 0;
const convertOctalToDecimalRecursive = (octalNumber, index = octalNumber.length - 1, decimalNumber = 0, powerOfEight = 0) => {
    if (index < 0) {
        return decimalNumber;
    }
    const digitValue = parseInt(octalNumber[index]);
    const updatedDecimal = decimalNumber + digitValue * 8 ** powerOfEight;
    return (0, exports.convertOctalToDecimalRecursive)(octalNumber, index - 1, updatedDecimal, powerOfEight + 1);
};
exports.convertOctalToDecimalRecursive = convertOctalToDecimalRecursive;
