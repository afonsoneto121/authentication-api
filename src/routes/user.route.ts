import {Request, Router} from 'express';
import {controlerUserCRUD} from '../useCases/UserCRUD';
import {JWTAuthenticationMiddleware} from '../middlewares/jwt-authentication.middleware';
// eslint-disable-next-line new-cap
const userRouter = Router();

userRouter.post('/user', async (req, res) => (
  controlerUserCRUD.handleSaveUser(req, res)));

userRouter.use(JWTAuthenticationMiddleware);
userRouter.get('/user', async (req, res) => (
  controlerUserCRUD.handleFindUser(req, res)));

userRouter.get('/user/:uuid', async (req: Request<{uuid: string}>, res) => (
  controlerUserCRUD.handleFindUserById(req, res)));

userRouter.delete('/user/:uuid', async (req: Request<{uuid: string}>, res) => (
  controlerUserCRUD.handleDeleteUser(req, res)));

userRouter.put('/user/:uuid', async (req: Request<{uuid: string}>, res) => (
  controlerUserCRUD.handleUpdateUser(req, res)));

export {userRouter};
