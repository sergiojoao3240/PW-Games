import express from 'express';

import { createUser, getUserByEmail } from '../db/users';
import { authentication, random } from '../helpers/index';


export const login = async (req: express.Request, res: express.Response) => {
    try{

        const { email, password } = req.body

        if (!email || !password){
            return res.sendStatus(400);
        }

        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
        if(!user){
            return res.sendStatus(400);
        }

        const expectedHash = authentication(user.authentication.salt, password);

        if(user.authentication.password != expectedHash){
            return res.sendStatus(403);
        }

        const salt = random ();
        user.authentication.sessionToken = authentication(salt, user._id.toString());

        await user.save();

        res.cookie('SERGIO-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/'});

        return res.status(200).json(user).end();

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const register = async (req: express.Request, res: express.Response) => {
    try {

        const {email, password} = req.body;
        if (!email || !password){
            return res.sendStatus(400);
        }

        const extisUser = await getUserByEmail(email);

        if (extisUser){
            return res.sendStatus(400);
        }

        const regex = /\d+/g;
        const matches = email.match(regex);
        const user_id = matches ? matches[0] : null;

        const salt = random();
        const user = await createUser({
            user_id,
            email,
            authentication:{
                salt,
                password: authentication(salt, password),
            },
        });

        return res.status(200).json(user).end();

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}