import express from 'express';
import authentication from './authentication';
import users from './users';
import curriculum from './curriculum';
import master_class from './master_class';
import author from './author';
import game from './game';

const router = express.Router();

// Guia das rotas
export default(): express.Router => {
    authentication(router);
    users(router);
    curriculum(router);
    master_class(router);
    author(router);
    game(router);

    return router;
};