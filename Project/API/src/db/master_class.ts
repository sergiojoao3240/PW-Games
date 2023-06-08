import mongoose, { mongo } from "mongoose";

const MasterSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type : String, required: true},
    image_dir: {type: String, required: true},
    time: {type: String, required: true},
    date: {type: String, required: true},
    place: {type: String, required: true},
    link: {type: String, required: true},
    year: {type: String, required: true},

});

export const MasterModel = mongoose.model('Master_Class', MasterSchema);

// Get
export const getMasters= () => MasterModel.find();
export const getMasterById = (_id: String) => MasterModel.findById({_id: _id});
export const getMasterByTitle = (title: String) => MasterModel.findOne({title});

// Create
export const createMaster = (values: Record<string, any>) => new MasterModel(values).save().then((master) => master.toObject());

// Delete
export const deleteMasterById = (id:string) => MasterModel.findOneAndDelete({_id: id});

// Update
export const updateMasterById = (id:string, values: Record<string, any>) => MasterModel.findByIdAndUpdate(id, values);