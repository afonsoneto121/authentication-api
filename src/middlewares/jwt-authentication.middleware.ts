import {Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes';
import JWT from 'jsonwebtoken';
const JWTAuthenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers['authorization'];
    if (!authorization) {
      throw new Error('Resource protected, not authorized');
    }
    const [authType, token] = authorization.split(' ');
    if (authType !== 'Bearer' || !token) {
      throw new Error('Resource protected, not authorized');
    }
    const SECRET_KEY = process.env.SECRET_KEY || 'KEY should be stored securely';

    const tokenPayload = JWT.verify(token, SECRET_KEY);

    if (!tokenPayload) {
      throw new Error('Resource protected, not authorized');
    }

    next();
  } catch (err: any) {
    return res.status(StatusCodes.FORBIDDEN).json({
      message: err.message || 'Unexpected error',
    });
  }
};

export default JWTAuthenticationMiddleware;
