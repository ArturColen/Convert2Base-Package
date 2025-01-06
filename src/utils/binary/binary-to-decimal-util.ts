export const convertBinaryToDecimalRecursive = (
    binaryNumber: string,
    index: number = binaryNumber.length - 1
): number => {
    if (index < 0) {
        return 0;
    }

    const digit = parseInt(binaryNumber[index], 10);
    const powerValue = 2 ** (binaryNumber.length - 1 - index);

    return digit * powerValue + convertBinaryToDecimalRecursive(binaryNumber, index - 1);
};
