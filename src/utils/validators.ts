export const validateEmail = (value: string) => {
    // phone
    if (/^\d+$/.test(value)) {
        return value.length > 4 && value.length < 20;
    }
    // email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export const validatePassword = (value: string) => {
    const length = value.length;
    return length > 3 && length < 61;
};
