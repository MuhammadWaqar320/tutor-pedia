import { Schema } from "mongoose";

export interface CourseInterface {
    id?: string;
    name: string;
    category: string;
    description: string;
    price: string;
    level: string;
    duration:string;
    preRequisites:string;
    upatedAt: number;
    createAt: number;
    coverPhotoUrl:string;
    language: string;
    isCertified: boolean;
    rating: number;
    startDate: string;
    endDate: string;
    teacher:Schema.Types.ObjectId;
    students?: Schema.Types.ObjectId[];
  }