export const convertHexadecimalToDecimalRecursive = (
    hexadecimalNumber: string,
    index: number = 0,
    decimalNumber: number = 0
): number => {
    if (index >= hexadecimalNumber.length) {
        return decimalNumber;
    }

    const digitValue = parseInt(hexadecimalNumber[index], 16);
    const updatedDecimal = decimalNumber * 16 + digitValue;

    return convertHexadecimalToDecimalRecursive(hexadecimalNumber, index + 1, updatedDecimal);
};
