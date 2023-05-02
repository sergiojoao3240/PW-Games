import express from 'express';

import { updateMaster, deleteMaster, getAllMaster, createMasterC, getAMaster } from '../controllers/master_controller';
import { isAuthenticated } from '../middlewares/index';

export default(router: express.Router) =>{
    router.post('/masterClass/new', isAuthenticated, createMasterC);
    router.get('/masterClass', isAuthenticated, getAllMaster);
    router.get('/masterClass/:id', isAuthenticated, getAMaster);
    router.delete('/masterClass/:id', isAuthenticated, deleteMaster);
    router.patch('/masterClass/:id', isAuthenticated, updateMaster);
};