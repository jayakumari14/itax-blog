import jwt from 'jsonwebtoken';

const DEFAULT_SIGN_OPTION = {
  expiresIn: '1Y',
  issuer: 'iTaxEasy',
};

// This returns the signed token with payload i.e user object.
export function signJwtAccessToken(payload, options = DEFAULT_SIGN_OPTION) {
  const secretKey = process.env.NEXT_JWT_SECRET_KEY;
  const token = jwt.sign(payload, secretKey, options);
  return token;
}

// This function verifies token and returns decoded token details i.e user
export function verifyJwt(token) {
  try {
    if (token) {
      const secretKey = process.env.NEXT_JWT_SECRET_KEY;
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    }
    throw new Error('Invalid token');
  } catch (error) {
    return false;
  }
}
