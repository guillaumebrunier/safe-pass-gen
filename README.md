# Safe Password Generator

**Safe Password Generator** is a secure password generation library, offering customizable options for strong, randomized passwords.

## Installation

You can install the library via npm:

```bash
npm install safe-pass-gen
```

## Usage

### Using import
```javascript
import { generatePassword } from 'safe-pass-gen';

const password = generatePassword(16, {
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true,
    excludeSimilars: true
});
```

### Using require
```javascript
const { generatePassword } = require('safe-pass-gen');

const password = generatePassword(16, {
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true,
    excludeSimilars: true
});
```

## API
`generatePassword(length: number, options: PasswordGeneratorOptions): string`

Generates a random password based on the provided options :

* `length`: Length of the generated password.
* `options`: An object specifying the password generation options.
    * `lowercase`: Include lowercase letters (`abcdefghijklmnopqrstuvwxyz`). *Default: `false`*
    * `uppercase`: Include uppercase letters (`ABCDEFGHIJKLMNOPQRSTUVWXYZ`). *Default: `false`*
    * `digits`: Include digits (`0123456789`). *Default: `false`*
    * `symbols`: Include special characters (`!@#$%^&*()_-+=[]{}|:;"<>,.?/~`). *Default: `false`*
    * `excludeSimilars`: Exclude similar characters (`0O1Il5S`). *Default: `false`*

Throws an error if invalid length is specified.\
Throws an error if no character sets are selected (`lowercase`, `uppercase`, `digits`, `symbols` are all `false`).

## License
This project is licensed under the MIT License