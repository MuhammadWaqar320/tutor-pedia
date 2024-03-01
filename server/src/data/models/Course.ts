import mongoose from "mongoose";
import { Document,Schema } from "mongoose";
import { CourseInterface } from "../../interfaces/course";

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    preRequisites: {
        type: String
    },
    updatedAt: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Number,
        required: true
    },
    coverPhotoUrl: {
        type: String
    },
    language: {
        type: String,
        required: true
    },
    isCertified: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number
    },
    startDate: {
        type: Number
    },
    endDate: {
        type: Number
    },
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
});

const CourseModel = mongoose.model<CourseInterface & Document>("Course", CourseSchema);

export default CourseModel;
