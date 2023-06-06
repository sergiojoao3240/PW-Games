export interface Subject {
    _id: string;
    name: string;
    semester: string;
    ects: string;
    year: string;
    __v: Number;
}

export interface ResponseSubjects {
    subjects: Subject[];
}