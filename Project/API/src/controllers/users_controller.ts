import express from 'express';
import { deleteUserById, getUserById, getUsers } from '../db/users';


// Função que apresenta todos os utilizadores
export const getAllUsers = async(req: express.Request, res: express.Response) => {
    try {

        const users = await getUsers();

        return res.status(200).json(users);

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

// Função que elimina um utilizador da base de dados
export const deleteUser = async(req: express.Request, res: express.Response) => {
    try{

        const {id } = req.params;

        const deletedUser = await deleteUserById(id)
        return res.json(deletedUser);

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

// Função que atualiza os dados de um utilizador da base de dados
export const updateUser = async(req: express.Request, res: express.Response) => {
    try{

        const { id } = req.params;
        const { email }= req.body;

        if(!email){
            return res.sendStatus(400);
        }

        const user = await getUserById(id);

        user.email = email;
        await user.save();

        return res.status(200).json(user).end();

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}