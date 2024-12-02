import { Router } from 'express';
import { bookController } from './book.controller';

const bookRouter = Router();
bookRouter.post('/', bookController.createBook);
bookRouter.get('/', bookController.getAllBook);
bookRouter.get('/:id', bookController.getSingleBook);
bookRouter.put('/:id', bookController.updateBook);
bookRouter.delete('/:id', bookController.deleteBook);

export default bookRouter;
