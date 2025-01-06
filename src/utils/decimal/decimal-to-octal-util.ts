export const convertDecimalToOctalRecursive = (decimalNumber: number): string => {
    if (decimalNumber === 0) {
        return '';
    }

    const remainder = decimalNumber % 8;

    return convertDecimalToOctalRecursive(Math.floor(decimalNumber / 8)) + remainder.toString();
};
