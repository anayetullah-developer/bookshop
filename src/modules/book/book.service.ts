import bookModel from "./book.model";
import {IBook } from "./book.interface";

const createBook = async (bookData: IBook): Promise<IBook> => {
    try {
        const newBook = await bookModel.create(bookData);
        return newBook;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error creating book: ${error.message}`);
        }
        throw new Error("Unknown error occurred while creating book");
    }
}

const getAllBook = async (searchTerm: string): Promise<IBook[]> => {
    try {
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
    } catch {
        throw new Error('Error fetching books');
    }
};


const getSingleBook = async (id: string): Promise<IBook | null> => { 
    console.log(`Fetching book with ID: ${id}`) 
    try {
        
        const book = await bookModel.findById(id);
        if (!book) {
            throw new Error("Book not found");
        }
        return book;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching book: ${error.message}`);
        }
        throw new Error("Unknown error occurred while fetching book");
    }
}


const updateBook = async (id: string, updateData: Partial<IBook>): Promise<IBook | null> => {  
    try {
        
        const updatedBook = await bookModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedBook) {
            throw new Error("Book not found or could not be updated");
        }
        return updatedBook;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error updating book: ${error.message}`);
        }
        throw new Error("Unknown error occurred while updating book");
    }
}


const deleteBook = async (id: string): Promise<IBook | null> => {  
    try {
        const result = await bookModel.findByIdAndDelete(id);
        if (!result) {
            throw new Error("Book not found or could not be deleted");
        }
        return result;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error deleting book: ${error.message}`);
        }
        throw new Error("Unknown error occurred while deleting book");
    }
}


export const bookService = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook,
};
