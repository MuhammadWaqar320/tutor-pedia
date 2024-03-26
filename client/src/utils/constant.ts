import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCourseIcon from '@mui/icons-material/Add';
import { MenuListType } from "@/components/DashboardLeftSideBar";
import { appRoute } from "@/routes";

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
    id: 1,
    title: "Dashboard",
    icon: DashboardIcon,
    route: appRoute.DASHBOARDS.ADMIN.DASHBOARD,
  },
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
];
