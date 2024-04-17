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
      TEACHERS: "/dashboards/student/teachers",
      COURSES: "/dashboards/student/courses",
      CODE_EDITOR: "/editor",
      ASSESSMENT: "/dashboards/student/assessment",
      NOTES: "/dashboards/student/notes",
      PROFILE: "/profile",
      CHAT: "/chat",
    },
    TEACHER: {
      COURSES: "/dashboards/teacher/courses",
      STUDENTS: "/dashboards/teacher/students",
      ADD_NOTES: "/dashboards/teacher/addNotes",
      ADD_ASSESSMENT: "/dashboards/teacher/addAssessment",
      PROFILE: "/profile",
      CODE_EDITOR: "/editor",
      CHAT: "/chat",
    },
    ADMIN: {
      PROFILE: "/profile",
      COURSES: "/dashboards/admin/courses",
      NEWCOURSE: "/dashboards/admin/newcourse",
      TEACHERS: '/dashboards/admin/teachers',
      STUDENTS: '/dashboards/admin/students',
      PAYMENT: "/dashboards/admin/payment",
      RATING:"/dashboards/admin/rating",
    },
  },
};
