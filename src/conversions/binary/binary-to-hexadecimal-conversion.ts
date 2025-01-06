import { convertDecimalToHexadecimalRecursive } from '../../utils/decimal/decimal-to-hexadecimal-util';
import { validateBinaryNumber } from '../../validators/binary-number-validator';
import { binToDec } from './binary-to-decimal-conversion';

export const binToHex = (binaryNumber: string): string => {
    validateBinaryNumber(binaryNumber);

    const decimalNumber = parseInt(binToDec(binaryNumber));
    const hexadecimalNumber = convertDecimalToHexadecimalRecursive(decimalNumber).toUpperCase();

    return hexadecimalNumber || '0';
};
