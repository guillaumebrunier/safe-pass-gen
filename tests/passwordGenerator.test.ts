import { generatePassword } from '../src/passwordGenerator';

describe('generatePassword', () => {
    it('should generate a password with lowercase letters only', () => {
        const password: string = generatePassword(12, {
            lowercase: true,
        });
        expect(password).toMatch(/^[a-z]+$/);
        expect(password).toHaveLength(12);
    });

    it('should generate a password with uppercase letters only', () => {
        const password: string = generatePassword(8, {
            uppercase: true,
        });
        expect(password).toMatch(/^[A-Z]+$/);
        expect(password).toHaveLength(8);
    });

    it('should generate a password with digits only', () => {
        const password: string = generatePassword(6, {
            digits: true,
        });
        expect(password).toMatch(/^\d+$/);
        expect(password).toHaveLength(6);
    });

    it('should generate a password with special characters only', () => {
        const password: string = generatePassword(10, {
            symbols: true,
        });
        expect(password).toMatch(/^[!@#$%^&*()_\-+=\[\]{}|:;"<>,.?/~]+$/);
        expect(password).toHaveLength(10);
    });

    it('should generate a password with all character sets included', () => {
        const password: string = generatePassword(15, {
            lowercase: true,
            uppercase: true,
            digits: true,
            symbols: true,
        });
        expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()_\-+=\[\]{}|:;"<>,.?/~]+$/);
        expect(password).toHaveLength(15);
    });

    it('should generate a password with no similar characters', () => {
        const password: string = generatePassword(16, {
            lowercase: true,
            uppercase: true,
            digits: true,
            symbols: true,
            excludeSimilars: true
        });
        expect(password).toMatch(/^[a-km-zA-HJ-NP-RT-Z2-46-9!@#$%^&*()_\-+=\[\]{}|:;"<>,.?/~]+$/);
        expect(password).toHaveLength(16);
    });

    it('should throw an error if invalid length is provided', () => {
        expect(() => generatePassword(0, {
            lowercase: true
        })).toThrow('Password length must be greater than 0');
    });

    it('should throw an error if empty options are provided', () => {
        expect(() => generatePassword(10, {})).toThrow('At least one character set must be selected');
    });

    it('should throw an error when no character sets are selected', () => {
        expect(() => generatePassword(8, {
            lowercase: false,
            uppercase: false,
            digits: false,
            symbols: false,
        })).toThrow('At least one character set must be selected');
    });
});