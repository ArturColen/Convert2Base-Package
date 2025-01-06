import { convertDecimalToOctalRecursive } from '../../utils/decimal/decimal-to-octal-util';
import { validateBinaryNumber } from '../../validators/binary-number-validator';
import { binToDec } from './binary-to-decimal-conversion';

export const binToOct = (binaryNumber: string): string => {
    validateBinaryNumber(binaryNumber);

    const decimalNumber = parseInt(binToDec(binaryNumber));
    const octalNumber = convertDecimalToOctalRecursive(decimalNumber);

    return octalNumber;
};
