import express from 'express';

import { updateAuthor, deleteAuthor, getAllAuthor, create_Author, getAAuthor } from '../controllers/author_controller';
import { isAuthenticated } from '../middlewares/index';

export default(router: express.Router) =>{
    router.post('/authors/new', isAuthenticated, create_Author);
    router.get('/authors', isAuthenticated, getAllAuthor);
    router.get('/authors/author/:id', isAuthenticated, getAAuthor);
    router.delete('/authors/:id', isAuthenticated, deleteAuthor);
    router.patch('/authors/:id', isAuthenticated, updateAuthor);

};