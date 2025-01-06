import { convertHexadecimalToOctalRecursive } from '../../utils/hexadecimal/hexadecimal-to-octal-util';
import { validateHexadecimalNumber } from '../../validators/hexadecimal-number-validator';

export const hexToOct = (hexadecimalNumber: string): string => {
    validateHexadecimalNumber(hexadecimalNumber);

    const octalNumber = convertHexadecimalToOctalRecursive(hexadecimalNumber);

    return octalNumber;
};
