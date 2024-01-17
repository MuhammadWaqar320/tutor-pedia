export enum UserRole {
  Admin = "Admin",
  Teacher = "Teacher",
  Student = "Student",
}
export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  phoneNo: string;
  createdAt: number;
  updatedAt: number;
}

