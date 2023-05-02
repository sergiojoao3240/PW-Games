import express from 'express';

import { updateGame, deleteGame, getAllGames, create_Game, getAGame } from '../controllers/game_controller';
import { isAuthenticated } from '../middlewares/index';

export default(router: express.Router) =>{
    router.post('/games/new', isAuthenticated, create_Game);
    router.get('/games', isAuthenticated, getAllGames);
    router.get('/games/game/:id', isAuthenticated, getAGame);
    router.delete('/games/:id', isAuthenticated, deleteGame);
    router.patch('/games/:id', isAuthenticated, updateGame);
};