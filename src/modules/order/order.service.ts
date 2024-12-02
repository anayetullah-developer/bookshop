import bookModel from '../book/book.model';
import orderModel from './order.model';

const createOrder = async (orderDetail: {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
}) => {
  const { email, product, quantity, totalPrice } = orderDetail;

  const book = await bookModel.findById(product);

  if (!book) {
    throw new Error('Product not found');
  }

  if (book.quantity < quantity) {
    throw new Error('Insufficient Stock available for this product');
  }

  book.quantity -= quantity;

  book.inStock = book.quantity > 0;

  await book.save();

  const newOrder = await orderModel.create({
    email,
    product,
    quantity,
    totalPrice,
  });

  return newOrder;
};

const calculateRevenue = async (): Promise<number> => {
  const result = await orderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalPrice',
        },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const orderService = {
  createOrder,
  calculateRevenue,
};
