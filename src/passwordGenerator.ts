export enum CharacterSets {
    Lowercase = 'abcdefghijklmnopqrstuvwxyz',
    Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    Digits = '0123456789',
    Symbols = '!@#$%^&*()_-+=[]{}|:;"<>,.?/~',
    Similars = '0O1Il5S'
}

export type PasswordGeneratorOptions = {
    lowercase?: boolean,
    uppercase?: boolean,
    digits?: boolean,
    symbols?: boolean,
    excludeSimilars?: boolean
}

/**
 * Generates a random password based on the specified options and length.
 *
 * @param {number} length - The length of the password.
 * @param {PasswordGeneratorOptions} options - The options for generating the password.
 * @throws {Error} If the length is less than or equal to 0.
 * @throws {Error} If no character sets are selected.
 * @return {string} The generated password.
 */
export function generatePassword(length: number, options: PasswordGeneratorOptions): string {
    let charset = '';

    if (length <= 0) {
        throw new Error('Password length must be greater than 0');
    }

    if (options.lowercase) {
        charset += CharacterSets.Lowercase;
    }

    if (options.uppercase) {
        charset += CharacterSets.Uppercase;
    }

    if (options.digits) {
        charset += CharacterSets.Digits;
    }

    if (options.symbols) {
        charset += CharacterSets.Symbols;
    }

    if (charset.length === 0) {
        throw new Error('At least one character set must be selected');
    }

    if (options.excludeSimilars) {
        charset = charset.split('').filter(char => !CharacterSets.Similars.includes(char)).join('');
    }

    let password = '';
    for (let i = 0; i < length; ++i) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}