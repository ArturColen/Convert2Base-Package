import { convertBinaryToDecimalRecursive } from '../../utils/binary/binary-to-decimal-util';
import { validateBinaryNumber } from '../../validators/binary-number-validator';

export const binToDec = (binaryNumber: string): string => {
    validateBinaryNumber(binaryNumber);

    const decimalNumber = convertBinaryToDecimalRecursive(binaryNumber);

    return decimalNumber.toString();
};
