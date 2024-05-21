import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productsRoute } from './app/modules/products/products.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', productsRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running!');
});

// not found route
app.get('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
