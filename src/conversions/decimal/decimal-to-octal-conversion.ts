import { convertDecimalToOctalRecursive } from '../../utils/decimal/decimal-to-octal-util';
import { validateDecimalNumber } from '../../validators/decimal-number-validator';

export const decToOct = (decimalNumber: string): string => {
    validateDecimalNumber(decimalNumber);

    const octalNumber = convertDecimalToOctalRecursive(parseInt(decimalNumber));

    return octalNumber || '0';
};
