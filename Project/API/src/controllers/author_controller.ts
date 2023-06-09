import express from 'express';
import { getAuthorById, getAuthors, createAuthor, getAUthorByNUmber, deleteAuthorById } from '../db/author';


// Função que obtém todos os autores existentes na base de dados
export const getAllAuthor = async(req: express.Request, res: express.Response) => {
    try {

        const authors = await getAuthors();

        return res.status(200).json(authors);

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

// Função que retorna os dados de apenas um autor conforme o id passado
export const getAAuthor = async(req: express.Request, res: express.Response) => {
    try{

        const { id } = req.params;

        const author = await getAuthorById(id)
        return res.json(author);

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

// Função que cria um novo autor
export const create_Author= async (req: express.Request, res: express.Response) => {
    try {

        // Verificar se numero existe
        // Criar regex para o numero
        const {name, email} = req.body;
        if (!name || !email){
            return res.sendStatus(400);
        }

        const regex = /\d+/g;
        const matches = email.match(regex);
        const number = matches ? matches[0] : null;

        const extisAuthor = await getAUthorByNUmber(number);

        if(extisAuthor){
            return res.sendStatus(400);
        }

        const author = await createAuthor({
            name,
            email,
            number
        });

        return res.status(200).json(author).end();

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

// Função que elimina um autor
export const deleteAuthor = async(req: express.Request, res: express.Response) => {
    try{

        const { id } = req.params;

        const deletedAuthor = await deleteAuthorById(id)
        return res.json(deletedAuthor);

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

// Função que atualiza os dados de um autor
export const updateAuthor = async(req: express.Request, res: express.Response) => {
    try{

        const { id } = req.params;
        const { name }= req.body;

        if(!name){
            return res.sendStatus(400);
        }

        const author = await getAuthorById(id);

        author.name = name;
        await author.save();

        return res.status(200).json(author).end();

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}