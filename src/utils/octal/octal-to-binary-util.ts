import { decToBin } from '../../conversions/decimal/decimal-to-binary-conversion';
import { octToDec } from '../../conversions/octal/octal-to-decimal-conversion';

export const convertOctalToBinaryRecursive = (
    octalNumber: string,
    index: number = 0,
    binaryNumber: string = ''
): string => {
    if (index >= octalNumber.length) {
        const decimalNumber = octToDec(octalNumber);
        return decToBin(decimalNumber.toString());
    }

    const digit = parseInt(octalNumber[index], 8);
    const binaryDigit = decToBin(digit.toString());

    return convertOctalToBinaryRecursive(octalNumber, index + 1, binaryNumber + binaryDigit);
};
