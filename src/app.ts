import express, { Request, Response } from 'express';
import bookRouter from './modules/book/book.route';
import orderRouter from './modules/order/order.route';

const app = express();

app.use(express.json());

app.use('/api/products', bookRouter);
app.use('/api/orders/', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live',
  });
});

export default app;
