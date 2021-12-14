import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {RefreshDTO} from './RefreshDTO';
import ServiceRefreshToken from './ServiceRefreshToken';

export default class ControllerRefreshToken {
  constructor(private service: ServiceRefreshToken) {}

  async hadleRefreshToken(req: Request, res: Response) {
    const refresh: RefreshDTO = req.body;
    try {
      const newToken = await this.service.refreshToken(refresh.id, refresh.token);
      return res.json({newToken: newToken});
    } catch (err: any) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}

