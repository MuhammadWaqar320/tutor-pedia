import mongoose from "mongoose";
import { Document,Schema } from "mongoose";
import { StudentInterface } from "../../interfaces/student";

const StudentSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
    updatedAt:{type:Number}
});

const StudentModel = mongoose.model<StudentInterface & Document>("Student", StudentSchema);

export default StudentModel;
