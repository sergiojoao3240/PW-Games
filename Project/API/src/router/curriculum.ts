import express from 'express';

import { updateCurriculum, deleteCurriculum, getAllCurriculum, createCurriculum, getACurriculum } from '../controllers/curriculum_controller';
import { isAuthenticated } from '../middlewares/index';

export default(router: express.Router) =>{
    router.post('/curriculum/new', isAuthenticated, createCurriculum);
    router.get('/curriculum', isAuthenticated, getAllCurriculum);
    router.get('/curriculum/curr/:id', isAuthenticated, getACurriculum);
    router.delete('/curriculum/:id', isAuthenticated, deleteCurriculum);
    router.patch('/curriculum/:id', isAuthenticated, updateCurriculum);
};