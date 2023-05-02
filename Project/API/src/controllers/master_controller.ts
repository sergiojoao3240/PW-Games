import express from 'express';

import { deleteMasterById, getMasterById, getMasters, getMasterByTitle, createMaster } from '../db/master_class';

export const getAllMaster = async(req: express.Request, res: express.Response) => {
    try {

        const masters = await getMasters();

        return res.status(200).json(masters);

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getAMaster = async(req: express.Request, res: express.Response) => {
    try{

        const { id } = req.params;

        const master = await getMasterById(id)
        return res.json(master);

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const createMasterC= async (req: express.Request, res: express.Response) => {
    try {

        const {title, description, image_dir, time, date, place, link, year} = req.body;
        if (!title || !description || !image_dir || !time || !date || !place || !link || !year){
            return res.sendStatus(400);
        }

        const extisMaster = await getMasterByTitle(title);

        if(extisMaster){
            return res.sendStatus(400);
        }

        const master = await createMaster({
            title,
            description,
            image_dir,
            time,
            date,
            place,
            link,
            year
        });

        return res.status(200).json(master).end();

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteMaster = async(req: express.Request, res: express.Response) => {
    try{

        const {id } = req.params;

        const deletedMaster = await deleteMasterById(id)
        return res.json(deletedMaster);

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateMaster= async(req: express.Request, res: express.Response) => {
    try{

        const { id } = req.params;
        const { title, description, date, place }= req.body;

        if(!title || !description || !date || !place){
            return res.sendStatus(400);
        }

        const master = await getMasterById(id);

        master.title = title;
        master.description = description;
        master.date = date;
        master.place = place;
        await master.save();

        return res.status(200).json(master).end();

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}