import bookModel from './book.model';
import { IBook } from './book.interface';

const createBook = async (bookData: IBook): Promise<IBook> => {
  const newBook = await bookModel.create(bookData);
  return newBook;
};

const getAllBook = async (searchTerm: string): Promise<IBook[]> => {
  if (searchTerm) {
    return await bookModel.find({
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { author: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    });
  } else {
    return await bookModel.find();
  }
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  console.log(`Fetching book with ID: ${id}`);
  const book = await bookModel.findById(id);
  return book;
};

const updateBook = async (
  id: string,
  updateData: Partial<IBook>,
): Promise<IBook | null> => {
  const updatedBook = await bookModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return updatedBook;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await bookModel.findByIdAndDelete(id);
  return result;
};

export const bookService = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
