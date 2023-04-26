import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    user_id: {type: String, required: true},
    email: {type: String, required: true},
    authentication: {
        password: {type: String, required: true, select: false},
        salt: {type: String, select: false},
        sessionToken: {type: String, select: false}
    },
});

export const UserModel = mongoose.model('User', UserSchema);

// Get
export const getUsers = () => UserModel.find();
export const getUserById = (id: String) => UserModel.findById({_id: id});
export const getUserByEmail = (email: String) => UserModel.findOne({email});
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken': sessionToken,
})

// Create
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());

// Delete
export const deleteUserById = (id:string) => UserModel.findOneAndDelete({_id: id});

// Update
export const updateUserById = (id:string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);