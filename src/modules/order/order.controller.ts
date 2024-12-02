import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, product, quantity, totalPrice } = req.body;

    const newOrder = await orderService.createOrder({
      email,
      product,
      quantity,
      totalPrice,
    });

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: newOrder,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'An unexpected error occurred';
    res.status(400).json({
      status: false,
      message,
    });
  }
};

const calculateRevenue = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const totalRevenue = await orderService.calculateRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'An unexpected error occurred';
    res.status(500).json({
      status: false,
      message,
    });
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
