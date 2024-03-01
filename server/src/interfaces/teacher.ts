export interface TeacherInterface {
    specialization:string;
    bio:string;
    qualification:string;
   }
export interface TeacherFeedbackInterface{
    teacherId: number;
    studentId: number;
    feedback: string;
    rating: number;
    feedbackDate: number;
}
export interface TeacherCourseInterface{
    createdAt: number;
    updatedAt: number;
    courseId: number; // ID of the course associated with the teacher
    teacherId: number; // ID of the teacher associated with the course
    isActive: boolean; // Indicates if the teacher is currently active for this course
    role: string; // Role of the teacher in the course (e.g., instructor, assistant)
}