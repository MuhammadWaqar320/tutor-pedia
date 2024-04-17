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
import GroupIcon from '@mui/icons-material/Group';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SmsIcon from '@mui/icons-material/Sms';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

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


export const courseLevel = {
  1: "Basic",
  2: "Intermediate",
  3: "Advance"
}

export const studentDashboardMenuItem: MenuListType[] = [
  {
    id: 1,
    title: "Courses",
    icon: FormatListBulletedIcon,
    route: appRoute.DASHBOARDS.STUDENT.COURSES,
  },
   {
    id: 2,
    title: "Teachers",
    icon: GroupIcon,
    route: appRoute.DASHBOARDS.STUDENT.TEACHERS,
  },
    {
    id: 3,
    title: "Assessment",
    icon: AssessmentIcon,
    route: appRoute.DASHBOARDS.STUDENT.ASSESSMENT,
  },
   {
    id: 4,
    title: "Code Editor",
    icon: BorderColorIcon,
    route: appRoute.DASHBOARDS.STUDENT.CODE_EDITOR,
  },
  {
    id: 5,
    title: "Notes",
    icon: SpeakerNotesIcon,
    route: appRoute.DASHBOARDS.STUDENT.NOTES,
  },
   {
    id: 6,
    title: "Profile",
    icon: AccountCircleIcon,
    route: appRoute.DASHBOARDS.STUDENT.PROFILE,
  },
  {
    id: 7,
    title: "Chat",
    icon: SmsIcon,
    route: appRoute.DASHBOARDS.STUDENT.CHAT,
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
    title: "Feedback",
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

export const teacherDashboardMenuItem: MenuListType[] = [
{
    id: 1,
    title: "Courses",
    icon: ViewListIcon,
    route: appRoute.DASHBOARDS.TEACHER.COURSES,
  },
  {
    id: 2,
    title: "Students",
    icon: ListAltIcon,
    route: appRoute.DASHBOARDS.TEACHER.STUDENTS,
  },
   {
    id: 3,
    title: "Add Notes",
    icon: SpeakerNotesIcon,
    route: appRoute.DASHBOARDS.TEACHER.ADD_NOTES,
  },
    {
    id: 4,
    title: "Add Assess",
    icon: AssessmentIcon,
    route: appRoute.DASHBOARDS.TEACHER.ADD_ASSESSMENT,
  },
     {
    id: 6,
    title: "Profile",
    icon: AccountCircleIcon,
    route: appRoute.DASHBOARDS.TEACHER.PROFILE,
  },
      {
    id: 5,
    title: "Code Editor",
    icon: BorderColorIcon,
    route: appRoute.DASHBOARDS.TEACHER.CODE_EDITOR,
  },
   {
    id: 6,
    title: "Chat",
    icon: SmsIcon,
    route: appRoute.DASHBOARDS.TEACHER.CHAT,
  },
];
