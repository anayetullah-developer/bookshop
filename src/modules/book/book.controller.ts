import { Request, Response } from 'express';
import { bookService } from './book.service';
import { IBook } from './book.interface';

const handleError = (res: Response, error: any) => {
  if (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
  return res
    .status(500)
    .json({ success: false, message: 'Internal Server Error' });
};

const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const newBook: IBook = await bookService.createBook(req.body);
    res
      .status(201)
      .json({
        message: 'Book created successfully',
        success: true,
        data: newBook,
      });
  } catch (error: any) {
    handleError(res, error);
  }
};

const getAllBook = async (req: Request, res: Response): Promise<void> => {
  const { searchTerm } = req.query;
  try {
    const books: IBook[] = await bookService.getAllBook(searchTerm as string);
    res
      .status(200)
      .json({
        message: 'Books retrieved successfully',
        success: true,
        data: books,
      });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

const getSingleBook = async (
  req: Request,
  res: Response,
): Promise<string | any> => {
  try {
    const book: IBook | null = await bookService.getSingleBook(req.params.id);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: 'Book not found' });
    }
    res.status(200).json({
      message: 'Book retrieved successfully',
      success: true,
      data: book,
    });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

const updateBook = async (
  req: Request,
  res: Response,
): Promise<string | any> => {
  try {
    const updatedBook: IBook | null = await bookService.updateBook(
      req.params.id,
      req.body,
    );
    
    if (!updatedBook) {
      return res
        .status(404)
        .json({ success: false, message: 'Book not found' });
    }
    res
      .status(200)
      .json({
        message: 'Book updated successfully',
        success: true,
        data: updatedBook,
      });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

const deleteBook = async (
  req: Request,
  res: Response,
): Promise<string | any> => {
  try {
    const result: IBook | null = await bookService.deleteBook(req.params.id);
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: 'Book not found' });
    }
    res
      .status(200)
      .json({ message: 'Book deleted successfully', success: true, data: {} });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

export const bookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
