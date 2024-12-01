import { IBook } from "../book/book.interface";

export interface IOrder {
    email: string;
    product: IBook['_id']; 
    quantity: number;
    totalPrice: number;
  }