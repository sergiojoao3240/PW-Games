import express from 'express';
import { updateMaster, deleteMaster, getAllMaster, createMasterC, getAMaster } from '../controllers/master_controller';
import { isAuthenticated } from '../middlewares/index';

// Rotas para as palestras, algumas estão comentadas por causa do frontend
export default(router: express.Router) =>{
    //router.post('/masterClass/new', isAuthenticated, createMasterC);
    //router.get('/masterClass', isAuthenticated, getAllMaster);
    //router.get('/masterClass/:id', isAuthenticated, getAMaster);
    //router.delete('/masterClass/:id', isAuthenticated, deleteMaster);
    //router.patch('/masterClass/:id', isAuthenticated, updateMaster);
    router.get('/masterClass', getAllMaster);
    router.get('/masterClass/:_id', getAMaster);
    router.post('/masterClass/new', createMasterC);
    router.delete('/masterClass/:id', deleteMaster);
    router.patch('/masterClass/:id', updateMaster);
};