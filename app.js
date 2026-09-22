import express from 'express';
import { routes } from './src/routes/index.js';
import { errorHandler } from './src/middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'BarberPro API is running' });
});

app.use(routes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`BarberPro API running at http://localhost:${port}`);
});

export { app };