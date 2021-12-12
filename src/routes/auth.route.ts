import {Router} from 'express';
import basicAuthenticationMiddleware from '../middlewares/basic-authentication.middleware';
import controllerAuth from '../useCases/Auth';

// eslint-disable-next-line new-cap
const authRoute = Router();

authRoute.post('/token', basicAuthenticationMiddleware, (req, res) => (
  controllerAuth.handlerLogin(req, res)
));
export default authRoute;
