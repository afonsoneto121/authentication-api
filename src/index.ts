import express from 'express';

const app = express();

const PORT = process.env.PORT || 3333;
app.get('/status', (req, res) => {
  res.status(200).json({
    menssage: 'OK',
  });
});


app.listen(PORT, () => {
  console.log(`Running in localhost:${PORT}`);
});
