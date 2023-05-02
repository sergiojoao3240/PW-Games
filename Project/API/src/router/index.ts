import express from 'express';

import authentication from './authentication';
import users from './users';
import curriculum from './curriculum';


const router = express.Router();

export default(): express.Router => {
    authentication(router);
    users(router);
    curriculum(router);

    return router;
};