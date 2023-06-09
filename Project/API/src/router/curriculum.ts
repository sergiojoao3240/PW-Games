import express from 'express';
import { updateCurriculum, deleteCurriculum, getAllCurriculum, createCurriculum, getACurriculum } from '../controllers/curriculum_controller';
import { isAuthenticated } from '../middlewares/index';

// Rotas para as cadeiras
export default(router: express.Router) =>{
    router.post('/curriculum/new', isAuthenticated, createCurriculum);
    //router.get('/curriculum', isAuthenticated, getAllCurriculum);
    router.get('/curriculum', getAllCurriculum);
    router.get('/curriculum/curr/:id', isAuthenticated, getACurriculum);
    router.delete('/curriculum/:id', isAuthenticated, deleteCurriculum);
    router.patch('/curriculum/:id', isAuthenticated, updateCurriculum);

    // Alguns estão sem verificação de autenticação para ser possivel usar no frontend
};