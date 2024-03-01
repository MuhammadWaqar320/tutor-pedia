import { Schema } from "mongoose";


export interface TeacherInterface {
    specialization:string;
    bio:string;
    qualification:string;
    courses:Schema.Types.ObjectId[];
    students:Schema.Types.ObjectId[];
    user:Schema.Types.ObjectId;
   }
export interface TeacherFeedbackInterface{
    teacher: Schema.Types.ObjectId;
    student: Schema.Types.ObjectId;
    feedback: string;
    rating: number;
    feedbackDate: number;
}