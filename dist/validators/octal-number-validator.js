"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOctalNumber = void 0;
const validateOctalNumber = (octalNumber) => {
    if (!/^[0-7]+$/.test(octalNumber)) {
        throw new Error('The provided octal number is invalid. Make sure it contains only digits from 0 to 7.');
    }
};
exports.validateOctalNumber = validateOctalNumber;
