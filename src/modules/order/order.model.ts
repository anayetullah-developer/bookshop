import mongoose, { Schema } from 'mongoose';
import { IOrder } from './order.interface';

const OrderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      validate: {
        validator: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
      required: [true, 'Product is required'],
    },

    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },

    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be a positive number'],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IOrder>('Order', OrderSchema);
