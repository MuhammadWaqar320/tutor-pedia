import { Schema } from "mongoose";

export interface CourseInterface {
    name: string;
    category: string;
    description: string;
    price: string;
    level: number;
    duration:string;
    preRequisites:string;
    upatedAt: number;
    createAt: number;
    coverPhotoUrl:string;
    language: string;
    isCertified: boolean;
    rating: number;
    startDate: number;
    endDate: number;
    teacher:Schema.Types.ObjectId;
    students: Schema.Types.ObjectId[];
  }