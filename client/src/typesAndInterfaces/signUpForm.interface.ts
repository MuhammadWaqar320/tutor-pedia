export enum UserRole{
    Admin = "Admin",
    Teacher = "Teacher",
    Student="Student"
}

export interface UserDataInterface{
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    role: UserRole;
    password: string;
}