import express from 'express';

import authentication from './authentication';
import users from './users';
import curriculum from './curriculum';
import master_class from './master_class';


const router = express.Router();

export default(): express.Router => {
    authentication(router);
    users(router);
    curriculum(router);
    master_class(router)

    return router;
};