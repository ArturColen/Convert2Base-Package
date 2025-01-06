export const validateHexadecimalNumber = (hexadecimalNumber: string) => {
    if (!/^[0-9A-Fa-f]+$/.test(hexadecimalNumber)) {
        throw new Error(
            'The provided hexadecimal number is invalid. Make sure it contains only hexadecimal digits.'
        );
    }
};
