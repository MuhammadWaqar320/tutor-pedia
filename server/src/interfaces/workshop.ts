import { StudentInterface } from "./student";

export interface WorkShop{
    id?: string;
    type: string;
    date: string;
    teacherId: string;
    noOfStudents?: number;
    meetingLink: string;
    createdAt: number;
    updatedAt: number;
    detail: string;
    duration: string;
}

export interface WorkShopRequest{
    id?: string;
    workShopId?: string;
    userId?: string;
    createdAt?: number;
    updatedAt?: number;
    status?: string;
}