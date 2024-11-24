import bookModel from "./book.model"

const createBook = async (bookData : any) => {
    const newBook = await bookModel.create(bookData);
    return newBook;
}

const getAllBook = async () => {
    const books = await bookModel.find();
    return books;
}

const getSingleBook = async (id : string) => {
    const book = await bookModel.findById(id);
    return book;
}

const updateBook = async (id : string, updateData: any) => {
    const updatedBook = await bookModel.findByIdAndUpdate(id, updateData, {new: true} )
    return updateBook;
}

const deleteBook = async (id: string) => {
    const result = await bookModel.findByIdAndDelete(id);
    return result;
}

// const orderBook = () => {

// }

// const calculateRevenue = () => {

// }

export const bookService = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook
}