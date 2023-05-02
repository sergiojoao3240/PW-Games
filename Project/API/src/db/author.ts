import mongoose, { mongo } from "mongoose";

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type : String, required: true},
    number: {type: String, required: true}
});

export const AuthorModel = mongoose.model('Author', AuthorSchema);

// Get
export const getAuthors= () => AuthorModel.find();
export const getAuthorById = (id: String) => AuthorModel.findById({_id: id});
export const getAUthorByNUmber = (number: String) => AuthorModel.findOne({number});

// Create
export const createAuthor = (values: Record<string, any>) => new AuthorModel(values).save().then((author) => author.toObject());

// Delete
export const deleteAuthorById = (id:string) => AuthorModel.findOneAndDelete({_id: id});

// Update
export const updateAuthorById = (id:string, values: Record<string, any>) => AuthorModel.findByIdAndUpdate(id, values);