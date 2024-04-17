import CourseService from "../../services/courseService";
import { CourseInterface } from '../../interfaces/course';

const courseService = new CourseService();

export const getAllCoursesResolver = async () => {
    return courseService.getAllData(["teacher"],true);
};

export const getCourseByIdResolver = async (_: any, args: { id: string }) => {
  return courseService.getDataById(args.id,["teacher"],true);
};

export const createCourseResolver = async (_: any, args: CourseInterface) => {
  return courseService.createCourse(args);
};

export const updateCourseResolver = async (_: any, args: CourseInterface & any) => {
    return courseService.updateDataById(args.id, args);
}


export const deleteCourseResolver = async (_: any, args: { id: string }) => {
  return courseService.deleteById(args.id);
};
