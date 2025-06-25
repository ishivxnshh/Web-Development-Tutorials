const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key';
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJWT(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }
    const signature = jwt.sign({
        username
    }, JWT_SECRET)
    return signature;
}

function verifyJWT(token) {
    try {
        jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return false;
    }    
    return true;
}

function decodeJWT(token) {
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

console.log(signJWT("www.shivansh065@gmail.com", "password"));