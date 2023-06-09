import mongoose, { mongo } from "mongoose";

// Modelo de base de dados dos jogos
const GameSchema = new mongoose.Schema({
    name: {type: String, required: true},
    authors: {type : Array, required: true},
    description: {type: String, required: true},
    link: {type: String, required: true},
    video_dir: {type: String, required: true},
    date: {type: String, required: true},
    image_dir: {type: String, required: true}
});

export const GameModel = mongoose.model('Games', GameSchema);

// Get
export const getGames= () => GameModel.find();
export const getGameById = (id: String) => GameModel.findById({_id: id});
export const getGameByName = (name: String) => GameModel.findOne({name});

// Create
export const createGame = (values: Record<string, any>) => new GameModel(values).save().then((game) => game.toObject());

// Delete
export const deleteGameById = (id:string) => GameModel.findOneAndDelete({_id: id});

// Update
export const updateGameById = (id:string, values: Record<string, any>) => GameModel.findByIdAndUpdate(id, values);