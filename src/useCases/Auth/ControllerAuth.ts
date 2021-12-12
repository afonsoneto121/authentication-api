import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {User} from '../../models/User';
import ServiceAuth from './ServiceAuth';
import JWT from 'jsonwebtoken';
export default class ControllerAuth {
  constructor(private service: ServiceAuth) {}

  async handlerLogin(req: Request, res: Response) {
    try {
      const date = req.emailAndPassword;
      const user = await this.service.login(date.email, date.password);
      user.password = '';

      const jwt = this.generateToken(user);

      return res.status(StatusCodes.OK).json({
        token: jwt,
        user,
      });
    } catch (err: any) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
  private generateToken(user: User) {
    const SECRET_KEY = process.env.SECRET_KEY || 'KEY should be stored securely';
    const payload = {
      username: user.name,
    };
    const options = {
      subject: user.id,
    };
    const token = JWT.sign(payload, SECRET_KEY, options);
    return token;
  }
}
