import {Router} from 'express';
import {StatusCodes} from 'http-status-codes';

// eslint-disable-next-line new-cap
const statusRouter = Router();

statusRouter.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'OK',
  });
});

export {statusRouter};
