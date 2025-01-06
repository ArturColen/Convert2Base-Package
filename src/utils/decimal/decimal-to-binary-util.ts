export const convertDecimalToBinaryRecursive = (decimalNumber: number): string => {
    if (decimalNumber === 0) {
        return '';
    }

    const remainder = decimalNumber % 2;
    
    return convertDecimalToBinaryRecursive(Math.floor(decimalNumber / 2)) + remainder.toString();
};
