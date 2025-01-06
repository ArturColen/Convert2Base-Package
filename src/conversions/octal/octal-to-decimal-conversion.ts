import { convertOctalToDecimalRecursive } from '../../utils/octal/octal-to-decimal-util';
import { validateOctalNumber } from '../../validators/octal-number-validator';

export const octToDec = (octalNumber: string): string => {
    validateOctalNumber(octalNumber);

    const decimalNumber = convertOctalToDecimalRecursive(octalNumber);

    return decimalNumber.toString();
};
