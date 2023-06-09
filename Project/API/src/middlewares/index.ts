import express from 'express';
import {get, merge } from 'lodash';
import { getUserBySessionToken } from '../db/users';

// Função para verificar se é o dono
export const isOwner = async(req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{

        const { id } = req.params;
        const currentUserId = get( req, 'identity._id') as string;

        if(!currentUserId){
            return res.sendStatus(403);
        }

        if(currentUserId.toString() != id){
            return res.sendStatus(403);
        }

        next();

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

// Função para verificar se está autenticado
export const isAuthenticated = async(req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{

        const sessionToken = req.cookies['SERGIO-AUTH'];

        if(!sessionToken){
            return res.sendStatus(403);
        }

        const existUser = await getUserBySessionToken(sessionToken);

        if(!existUser){
            return res.sendStatus(404);
        }

        merge(req, { identity: existUser });

        return next();

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}