import {Router} from 'express';

// eslint-disable-next-line new-cap
const statusRouter = Router();

statusRouter.get('/status', (req, res) => {
  res.status(200).json({
    message: 'OK',
  });
});

export default statusRouter;
