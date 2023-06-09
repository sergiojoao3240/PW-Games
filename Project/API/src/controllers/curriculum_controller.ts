import express from 'express';
import { deleteCurById, getCurById, getCurriculum, getCurByName, createCur } from '../db/curriculum';


// Função que apresenta todas as cadeiras do curso de forma ordenada
export const getAllCurriculum = async(req: express.Request, res: express.Response) => {
    try {

        const curriculums = await getCurriculum();

        // Ordenar as cadeiras por ano e depois por semestre
        curriculums.sort((a, b) => {
            const yearA = parseInt(a.year, 10);
            const yearB = parseInt(b.year, 10);

            if (yearA !== yearB) {
            return yearA - yearB;
            } else {
            const semesterA = parseInt(a.semester, 10);
            const semesterB = parseInt(b.semester, 10);
            return semesterA - semesterB;
            }
        });

        curriculums.forEach((curriculum) => {
            curriculum.year = curriculum.year.toString();
            curriculum.semester = curriculum.semester.toString();
        });

        return res.status(200).json(curriculums);

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

// Função que apresenta os dados de uma cadeira de acordo com o id passado
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

//Função que cria uma nova cadeira
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

// Função que elimina uma cadeira do curso
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

//Função atualiza os dados de uma cadeira do curso
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