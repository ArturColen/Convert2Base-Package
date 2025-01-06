export const convertOctalToDecimalRecursive = (
    octalNumber: string,
    index: number = octalNumber.length - 1,
    decimalNumber: number = 0,
    powerOfEight: number = 0
): number => {
    if (index < 0) {
        return decimalNumber;
    }

    const digitValue = parseInt(octalNumber[index]);
    const updatedDecimal = decimalNumber + digitValue * 8 ** powerOfEight;

    return convertOctalToDecimalRecursive(octalNumber, index - 1, updatedDecimal, powerOfEight + 1);
};
