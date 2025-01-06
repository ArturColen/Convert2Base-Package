import { decToBin } from '../../conversions/decimal/decimal-to-binary-conversion';

export const convertHexadecimalToBinaryRecursive = (
    hexadecimalNumber: string,
    index: number = 0,
    binaryNumber: string = ''
): string => {
    if (index >= hexadecimalNumber.length) {
        return binaryNumber;
    }

    const digit = parseInt(hexadecimalNumber[index], 16);
    const binaryDigit = decToBin(digit.toString()).padStart(4, '0');

    return convertHexadecimalToBinaryRecursive(
        hexadecimalNumber,
        index + 1,
        binaryNumber + binaryDigit
    );
};
