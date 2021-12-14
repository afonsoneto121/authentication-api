import {Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes';
import JWT, {TokenExpiredError} from 'jsonwebtoken';
const JWTAuthenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers['authorization'];
    if (!authorization) {
      throw new Error('Resource protected, not authorized');
    }
    const [authType, token] = authorization.split(' ');
    if (authType !== 'Bearer' || !token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Token Expired',
      });
    }
    const SECRET_KEY = process.env.SECRET_KEY || 'KEY should be stored securely';

    JWT.verify(token, SECRET_KEY, (err, data) => {
      if (err instanceof TokenExpiredError) {
        throw new Error('Token expired');
      } else if (err) {
        throw new Error('Resource protected, not authorized');
      }
    });

    next();
  } catch (err: any) {
    return res.status(StatusCodes.FORBIDDEN).json({
      message: err.message || 'Unexpected error',
    });
  }
};

export {JWTAuthenticationMiddleware};
