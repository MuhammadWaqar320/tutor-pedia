import { UserType } from "./user";
import { StudentType } from "./student";
import { CourseType } from "./course";

export interface TeacherType{
      specialization:string;
    bio:string;
    qualification:string;
    courses:CourseType[];
    students:StudentType[];
    user:UserType;
}