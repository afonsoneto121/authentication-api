import {Router} from 'express';
import basicAuthenticationMiddleware from '../middlewares/basic-authentication.middleware';
import JWTAuthenticationMiddleware from '../middlewares/jwt-authentication.middleware';
import controllerAuth from '../useCases/Auth';

// eslint-disable-next-line new-cap
const authRoute = Router();

authRoute.post('/token', basicAuthenticationMiddleware, (req, res) => (
  controllerAuth.handlerLogin(req, res)
)); authRoute.post('/token/validate', JWTAuthenticationMiddleware, (req, res) => (
  controllerAuth.handleValidate(req, res)
));
export default authRoute;
