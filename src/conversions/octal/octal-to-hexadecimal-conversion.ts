import { convertOctalToDecimalRecursive } from '../../utils/octal/octal-to-decimal-util';
import { validateOctalNumber } from '../../validators/octal-number-validator';

export const octToHex = (octalNumber: string): string => {
    validateOctalNumber(octalNumber);

    const decimalNumber = convertOctalToDecimalRecursive(octalNumber);
    const hexadecimalNumber = decimalNumber.toString(16);

    return hexadecimalNumber.toUpperCase();
};
