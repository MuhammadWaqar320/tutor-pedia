import { Schema } from "mongoose";

export interface StudentInterface {
    updatedAt: number;
    course: Schema.Types.ObjectId[]; // IDs of the course associated with the student
    user: Schema.Types.ObjectId;
    teachers: Schema.Types.ObjectId[];
}
