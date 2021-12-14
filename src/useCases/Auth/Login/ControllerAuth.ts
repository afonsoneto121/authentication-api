import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {generateToken} from '../../../utils/utils';
import {ServiceAuth} from './ServiceAuth';
class ControllerAuth {
  constructor(private service: ServiceAuth) {}

  public async handlerLogin(req: Request, res: Response) {
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

  public handleValidate(req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({
      message: 'Valid token',
    });
  }
}

export {ControllerAuth};
