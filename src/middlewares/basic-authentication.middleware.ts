import {Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes';

const basicAuthenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers['authorization'];
    if (!authorization) {
      throw new Error('Resource protected, not authorized');
    }
    const [authType, token] = authorization.split(' ');
    if (authType !== 'Basic' || !token) {
      throw new Error('Resource protected, not authorized');
    }
    const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

    const [email, password] = tokenContent.split(':');
    if (!email || !password) {
      throw new Error('Resource protected, not authorized');
    }
    req.emailAndPassword = {email, password};

    next();
  } catch (err: any) {
    return res.status(StatusCodes.FORBIDDEN).json({
      message: err.message || 'Unexpected error',
    });
  }
};

export default basicAuthenticationMiddleware;
