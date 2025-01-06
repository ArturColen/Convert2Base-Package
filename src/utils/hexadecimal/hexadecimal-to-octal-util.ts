import { binToOct } from '../../conversions/binary/binary-to-octal-conversion';
import { hexToBin } from '../../conversions/hexadecimal/hexadecimal-to-binary-conversion';

export const convertHexadecimalToOctalRecursive = (
    hexadecimalNumber: string,
    index: number = 0,
    binaryNumber: string = ''
): string => {
    if (index >= hexadecimalNumber.length) {
        const octalNumber = binToOct(binaryNumber);
        return octalNumber;
    }

    const binaryDigit = hexToBin(hexadecimalNumber[index]);
    const updatedBinary = binaryNumber + binaryDigit;

    return convertHexadecimalToOctalRecursive(hexadecimalNumber, index + 1, updatedBinary);
};
