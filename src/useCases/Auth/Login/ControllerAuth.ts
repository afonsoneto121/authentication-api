import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {generateToken} from '../../../utils/utils';
import ServiceAuth from './ServiceAuth';
export default class ControllerAuth {
  constructor(private service: ServiceAuth) {}

  async handlerLogin(req: Request, res: Response) {
    try {
      const date = req.emailAndPassword;
      const user = await this.service.login(date.email, date.password);
      user.password = '';

      const jwt = generateToken(user);

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

  handleValidate(req: Request, res: Response) {
    return res.status(200).json({
      message: 'Valid token',
    });
  }
}
