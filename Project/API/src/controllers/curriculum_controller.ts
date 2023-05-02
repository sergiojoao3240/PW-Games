import express from 'express';

import { deleteCurById, getCurById, getCurriculum, getCurByName, createCur } from '../db/curriculum';

export const getAllCurriculum = async(req: express.Request, res: express.Response) => {
    try {

        const curriculums = await getCurriculum();

        return res.status(200).json(curriculums);

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getACurriculum = async(req: express.Request, res: express.Response) => {
    try{

        const {id } = req.params;

        const cur= await getCurById(id)
        return res.json(cur);

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const createCurriculum = async (req: express.Request, res: express.Response) => {
    try {

        const {name, semester, ects, year} = req.body;
        if (!name || !semester || !ects || !year){
            return res.sendStatus(400);
        }

        const extisCur = await getCurByName(name);

        if(extisCur){
            return res.sendStatus(400);
        }

        const curriculum = await createCur({
            name,
            semester,
            ects,
            year
        });

        return res.status(200).json(curriculum).end();

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteCurriculum = async(req: express.Request, res: express.Response) => {
    try{

        const {id } = req.params;

        const deletedCur= await deleteCurById(id)
        return res.json(deletedCur);

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateCurriculum = async(req: express.Request, res: express.Response) => {
    try{

        const { id } = req.params;
        const { name }= req.body;

        if(!name){
            return res.sendStatus(400);
        }

        const curriculum = await getCurById(id);

        curriculum.name = name;
        await curriculum.save();

        return res.status(200).json(curriculum).end();

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}