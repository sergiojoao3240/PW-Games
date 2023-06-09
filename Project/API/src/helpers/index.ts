import crypto from 'crypto';

//Encriptação da palavra passe com sha256
const SECRET ="SERGIO-API"

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};

// Authentication Model