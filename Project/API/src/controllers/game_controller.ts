import express from 'express';

import { getGameById, getGames, createGame, getGameByName, deleteGameById } from '../db/games';
import { getAuthorByName } from '../db/author';

export const getAllGames = async(req: express.Request, res: express.Response) => {
    try {

        const games = await getGames();

        return res.status(200).json(games);

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getAGame= async(req: express.Request, res: express.Response) => {
    try{

        const { id } = req.params;

        const game = await getGameById(id)
        return res.json(game);

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const create_Game= async (req: express.Request, res: express.Response) => {
    try {

        const {name, authors, description, link, video_dir, date} = req.body;
        if (!name || !authors || !description || !link || !video_dir || !date){
            return res.sendStatus(400);
        }

        // Verificar se todos os autores existem
        const extisAuthor = await Promise.all(authors.map(getAuthorByName))
                                    .then((results) => results.every((exists) => exists))
                                    .catch((err) => {
                                        console.error(err);
                                        return false;
                                    });

        if(!extisAuthor){
            return res.sendStatus(400);
        }

        const game = await createGame({
            name,
            authors,
            description,
            link,
            video_dir,
            date
        });

        return res.status(200).json(game).end();

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteGame = async(req: express.Request, res: express.Response) => {
    try{

        const { id } = req.params;

        const deletedGame = await deleteGameById(id)
        return res.json(deletedGame);

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateGame = async(req: express.Request, res: express.Response) => {
    try{

        const { id } = req.params;
        const { description, link, video_dir}= req.body;

        if(!description || !link || !video_dir){
            return res.sendStatus(400);
        }

        const game = await getGameById(id);

        game.description = description;
        game.link = link;
        game.video_dir = video_dir;
        await game.save();

        return res.status(200).json(game).end();

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}