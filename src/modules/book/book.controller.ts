import { Request, Response } from "express"
import { bookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
    try {
        const newBook = await bookService.createBook(req.body);
        res.status(201).json({success: true, data: newBook})
    }catch(error : any) {
        res.status(400).json({success: false, message: error.message})
    }
}

const getAllBook = async (req: Request, res: Response) => {
    try {
        const books = await bookService.getAllBook();
        res.status(200).json({success: true, data: books});
    }catch(error: any) {
        res.status(400).json({success: false, message: error.message})
    }
}

const getSingleBook = async (req: Request, res: Response) => {
    try{
        const book = await bookService.getSingleBook(req.params.id);
        res.status(200).json({success: true, data: book});
    }catch(error: any) {
        res.status(400).json({success: false, message: error.message});
    }
}

const updateBook = async (req: Request, res: Response) => {
    try {
        const updatedBook = await bookService.updateBook(req.params.id, req.body);
        res.status(200).json({success: true, data: updatedBook});
    }catch(error: any) {
        res.status(400).json({success: false, message: error.message});
    }
}

const deleteBook = async (req: Request, res: Response) => {
    try {
        const result = await bookService.deleteBook(req.params.id);
        res.status(200).json({success: true, message: 'Book has been deleted successfully'});
    }catch(error: any) {
        res.status(400).json({success: false, message: error.message});
    }
}

export const bookController = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook
}