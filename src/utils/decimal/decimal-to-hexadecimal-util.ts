export const convertDecimalToHexadecimalRecursive = (decimalNumber: number): string => {
    if (decimalNumber === 0) {
        return '';
    }

    const remainder = decimalNumber % 16;
    const hexadecimalDigit = remainder.toString(16).toUpperCase();

    return convertDecimalToHexadecimalRecursive(Math.floor(decimalNumber / 16)) + hexadecimalDigit;
};
