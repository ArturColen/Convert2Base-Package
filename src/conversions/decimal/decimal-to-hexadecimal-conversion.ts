import { convertDecimalToHexadecimalRecursive } from '../../utils/decimal/decimal-to-hexadecimal-util';
import { validateDecimalNumber } from '../../validators/decimal-number-validator';

export const decToHex = (decimalNumber: string): string => {
    validateDecimalNumber(decimalNumber);

    const hexadecimalNumber = convertDecimalToHexadecimalRecursive(parseInt(decimalNumber));

    return hexadecimalNumber || '0';
};
