import express from 'express';
import { login, register } from '../controllers/authentication_controller';

// Rotas para a autenticação
export default(router : express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
}