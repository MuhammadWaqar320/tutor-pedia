"use client"
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCourseIcon from '@mui/icons-material/Add';
import { MenuListType } from "@/components/DashboardLeftSideBar";
import { appRoute } from "@/routes";
import ViewListIcon from '@mui/icons-material/ViewList';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import GradeIcon from '@mui/icons-material/Grade';

export const endPoint = "http://localhost:5000/graphql";

export const gqlErrorCodes = {
  graphqlParseFailed: "GRAPHQL_PARSE_FAILED",
  graphqlValidationFailed: "GRAPHQL_VALIDATION_FAILED",
  badUserInput: "BAD_USER_INPUT",
  persistedQueryNotFound: "PERSISTED_QUERY_NOT_FOUND",
  persistedQueryNotSupported: "PERSISTED_QUERY_NOT_SUPPORTED",
  operationResolutionFailure: "OPERATION_RESOLUTION_FAILURE",
  badRequest: "BAD_REQUEST",
  internalServerError: "INTERNAL_SERVER_ERROR",
  notFound: "NOT_FOUND",
  forbidden: "FORBIDDEN",
  OK: "OK",
  alreadyExist: "ALREADY_EXIST",
};
export const userRole = {
  admin: "Admin",
  teacher: "Teacher",
  student: "Student",
};

export const studentDashboardMenuItem: MenuListType[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: DashboardIcon,
    route: appRoute.DASHBOARDS.STUDENT.DASHBOARD,
  },
  {
    id: 2,
    title: "Courses",
    icon: FormatListBulletedIcon,
    route: appRoute.DASHBOARDS.STUDENT.COURSES,
  },
];

export const adminDashboardMenuItem: MenuListType[] = [

  {
    id: 2,
    title: "Courses",
    icon: FormatListBulletedIcon,
    route: appRoute.DASHBOARDS.ADMIN.COURSES,
  },
  {
    id: 3,
    title: "New Course",
    icon: AddCourseIcon,
    route: appRoute.DASHBOARDS.ADMIN.NEWCOURSE,
  },
   {
    id: 4,
    title: "Students",
    icon: ListAltIcon,
    route: appRoute.DASHBOARDS.ADMIN.STUDENTS,
  },
    {
    id: 5,
    title: "Teachers",
    icon: ViewListIcon,
    route: appRoute.DASHBOARDS.ADMIN.TEACHERS,
  },
     {
    id: 6,
    title: "Profile",
    icon: AccountCircleIcon,
    route: appRoute.DASHBOARDS.ADMIN.PROFILE,
  },
      {
    id: 5,
    title: "Rating",
    icon: GradeIcon,
    route: appRoute.DASHBOARDS.ADMIN.RATING,
  },
       {
    id: 5,
    title: "Payment",
    icon: PaymentIcon,
    route: appRoute.DASHBOARDS.ADMIN.PAYMENT,
  },
];
