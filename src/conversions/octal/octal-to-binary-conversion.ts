import { convertOctalToBinaryRecursive } from '../../utils/octal/octal-to-binary-util';
import { validateOctalNumber } from '../../validators/octal-number-validator';

export const octToBin = (octalNumber: string): string => {
    validateOctalNumber(octalNumber);

    const binaryNumber = convertOctalToBinaryRecursive(octalNumber);

    return binaryNumber;
};
