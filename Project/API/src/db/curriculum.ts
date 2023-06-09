import mongoose, { mongo } from "mongoose";

// Modelo de base de dados das cadeiras
const CurriculumSchema = new mongoose.Schema({
    name: {type: String, required: true},
    semester: {type : String, required: true},
    ects: {type: String, required: true},
    year: {type: String, required: true},
});

export const CurModel = mongoose.model('Curriculum', CurriculumSchema);

// Get
export const getCurriculum = () => CurModel.find();
export const getCurById = (id: String) => CurModel.findById({_id: id});
export const getCurByName = (name: String) => CurModel.findOne({name});

// Create
export const createCur = (values: Record<string, any>) => new CurModel(values).save().then((curriculum) => curriculum.toObject());

// Delete
export const deleteCurById = (id:string) => CurModel.findOneAndDelete({_id: id});

// Update
export const updateCurById = (id:string, values: Record<string, any>) => CurModel.findByIdAndUpdate(id, values);