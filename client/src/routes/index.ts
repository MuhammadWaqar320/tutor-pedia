export const appRoute = {
  PUBLIC_ROUTES: {
    ABOUT: "/about",
    COURSES: "/courses",
    SIGN_UP: "/signUp",
    HOME: "/",
    GIGS:"/teachers"
  },
  DASHBOARDS: {
    STUDENT: {
      DASHBOARD: "/dashboards/student",
      COURSES: "/dashboards/student/courses",
    },
    TEACHER: {
      DASHBOARD: "/dashboards/teacher",
    },
    ADMIN: {
      PROFILE: "/dashboards/admin/profile",
      COURSES: "/dashboards/admin/courses",
      NEWCOURSE: "/dashboards/admin/newcourse",
      TEACHERS: '/dashboards/admin/teachers',
      STUDENTS: '/dashboards/admin/students',
      PAYMENT: "/dashboards/admin/payment",
      RATING:"/dashboards/admin/rating",
    },
  },
};
