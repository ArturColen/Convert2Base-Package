import { convertHexadecimalToDecimalRecursive } from '../../utils/hexadecimal/hexadecimal-to-decimal-util';
import { validateHexadecimalNumber } from '../../validators/hexadecimal-number-validator';

export const hexToDec = (hexadecimalNumber: string): string => {
    validateHexadecimalNumber(hexadecimalNumber);

    const decimalNumber = convertHexadecimalToDecimalRecursive(hexadecimalNumber);

    return decimalNumber.toString();
};
