"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBinaryToDecimalRecursive = void 0;
const convertBinaryToDecimalRecursive = (binaryNumber, index = binaryNumber.length - 1) => {
    if (index < 0) {
        return 0;
    }
    const digit = parseInt(binaryNumber[index], 10);
    const powerValue = 2 ** (binaryNumber.length - 1 - index);
    return digit * powerValue + (0, exports.convertBinaryToDecimalRecursive)(binaryNumber, index - 1);
};
exports.convertBinaryToDecimalRecursive = convertBinaryToDecimalRecursive;
