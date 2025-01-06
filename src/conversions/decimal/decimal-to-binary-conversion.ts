import { convertDecimalToBinaryRecursive } from '../../utils/decimal/decimal-to-binary-util';
import { validateDecimalNumber } from '../../validators/decimal-number-validator';

export const decToBin = (decimalNumber: string): string => {
    validateDecimalNumber(decimalNumber);

    const binaryNumber = convertDecimalToBinaryRecursive(parseInt(decimalNumber));

    return binaryNumber || '0';
};
