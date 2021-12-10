import express from 'express';
import statusRouter from './routes/status.router';
import userRouter from './routes/user.route';

const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(statusRouter);
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Running in localhost:${PORT}`);
});
