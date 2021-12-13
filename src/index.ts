import express from 'express';
import statusRouter from './routes/status.router';
import userRouter from './routes/user.route';
import logger from 'morgan';
import cors from 'cors';
import * as database from './db/config';
import authRoute from './routes/auth.route';
import JWTAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';

const app = express();

const port = process.env.PORT || 3333;
app.use(logger('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(statusRouter);
app.use(authRoute);
app.use(JWTAuthenticationMiddleware, userRouter);

database.run().then(() => {
  app.listen(port, () => console.log(`API running in port ${port}`));
});
