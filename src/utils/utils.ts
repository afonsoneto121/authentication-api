import JWT, {SignOptions} from 'jsonwebtoken';
import {User} from '../models/User';

export const generateToken = (user: User) => {
  const SECRET_KEY = process.env.SECRET_KEY || 'KEY should be stored securely';
  const payload = {
    username: user.name,
  };
  const options: SignOptions = {
    expiresIn: '15m',
    subject: user.id,
  };
  const token = JWT.sign(payload, SECRET_KEY, options);
  return token;
};
