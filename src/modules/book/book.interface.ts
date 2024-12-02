import { Types } from 'mongoose';

export enum Category {
  Fiction = 'Fiction',
  Science = 'Science',
  SelfDevelopment = 'SelfDevelopment',
  Poetry = 'Poetry',
  Religious = 'Religious',
}

export interface IBook {
  _id: Types.ObjectId;
  title: string;
  author: string;
  price: number;
  category: Category;
  description: string;
  quantity: number;
  inStock: boolean;
}
