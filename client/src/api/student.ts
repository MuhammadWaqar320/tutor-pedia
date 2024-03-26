import { UserType } from "./user";
import { TeacherType } from "./teacher";
import { CourseType } from "./course";

export interface StudentType{
    updatedAt: number;
    courses: CourseType[]; 
    user: UserType;
    teachers: TeacherType[];
}