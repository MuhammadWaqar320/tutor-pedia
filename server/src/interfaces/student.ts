export interface StudentCourseInterface {
    createdAt: number;
    updatedAt: number;
    courseId: number; // ID of the course associated with the student
    studentId: number; // ID of the student associated with the course
    isActive: boolean; // Indicates if the student is currently active for this course
    grade?: number; // Optional field for storing the grade of the student in the course
}
