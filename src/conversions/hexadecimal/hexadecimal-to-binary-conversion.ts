import { convertHexadecimalToBinaryRecursive } from '../../utils/hexadecimal/hexadecimal-to-binary-util';
import { validateHexadecimalNumber } from '../../validators/hexadecimal-number-validator';

export const hexToBin = (hexadecimalNumber: string): string => {
    validateHexadecimalNumber(hexadecimalNumber);

    const binaryNumber = convertHexadecimalToBinaryRecursive(hexadecimalNumber);

    return binaryNumber;
};
