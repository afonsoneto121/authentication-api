import cors from 'cors';
import express from 'express';
import logger from 'morgan';

import cors from 'cors';
import * as databaseMongo from './db/mongo.config';
import authRoute from './routes/auth.route';

const app = express();

const port = parseInt(process.env.PORT || '3333');
const hostname = process.env.HOST || '0.0.0.0';
app.use(logger('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(statusRouter);
app.use(authRoute);
app.use(userRouter);

app.listen(port, hostname, () => {
  console.log(`API running in port ${port}`);
  databaseMongo.run();
});
