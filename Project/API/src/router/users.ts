import express from 'express';
import { updateUser, deleteUser, getAllUsers } from '../controllers/users_controller';
import { isAuthenticated, isOwner } from '../middlewares/index';

// Rotas para os utilizadores
export default(router: express.Router) =>{
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};