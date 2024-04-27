"use client";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCourseIcon from "@mui/icons-material/Add";
import { MenuListType } from "@/components/DashboardLeftSideBar";
import { appRoute } from "@/routes";
import ViewListIcon from "@mui/icons-material/ViewList";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import GradeIcon from "@mui/icons-material/Grade";
import GroupIcon from "@mui/icons-material/Group";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SmsIcon from "@mui/icons-material/Sms";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import { Question } from "@/components/Quiz";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import Groups2Icon from "@mui/icons-material/Groups2";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

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
  3: "Advance",
};

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
    title: "Lectures",
    icon: OndemandVideoIcon,
    route: appRoute.DASHBOARDS.STUDENT.LECTURES,
  },
  {
    id: 7,
    title: "Profile",
    icon: AccountCircleIcon,
    route: appRoute.DASHBOARDS.STUDENT.PROFILE,
  },
  {
    id: 8,
    title: "Chat",
    icon: SmsIcon,
    route: appRoute.DASHBOARDS.STUDENT.CHAT,
  },
  {
    id: 9,
    title: "Workshops",
    icon: Groups2Icon,
    route: appRoute.DASHBOARDS.STUDENT.WORKSHOP,
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

export const softwareDevelopmentQuestions: Question[] = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["Java", "HTML", "Python", "C++"],
    correctOptionIndex: 1,
  },
  {
    question:
      'Which programming language is known as the "scripting language for Web pages"?',
    options: ["Python", "JavaScript", "Java", "C++"],
    correctOptionIndex: 1,
  },
  {
    question:
      "Which software development methodology focuses on iterative and incremental development?",
    options: ["Waterfall", "Agile", "Scrum", "Extreme Programming"],
    correctOptionIndex: 1,
  },
  {
    question: "What is the purpose of version control systems like Git?",
    options: [
      "To manage project timelines",
      "To track changes in source code",
      "To create user interfaces",
      "To deploy applications",
    ],
    correctOptionIndex: 1,
  },
  {
    question:
      "Which programming language is commonly used for backend web development?",
    options: ["HTML", "Python", "JavaScript", "Java"],
    correctOptionIndex: 3,
  },
  {
    question:
      "Which type of testing checks the behavior of a software application as a whole?",
    options: [
      "Unit testing",
      "Integration testing",
      "System testing",
      "Acceptance testing",
    ],
    correctOptionIndex: 2,
  },
  {
    question: "What is the purpose of the npm command in Node.js development?",
    options: [
      "To install packages",
      "To compile TypeScript code",
      "To run unit tests",
      "To generate documentation",
    ],
    correctOptionIndex: 0,
  },
  {
    question:
      "What is the role of a frontend developer in software development?",
    options: [
      "To develop the user interface of an application",
      "To manage databases",
      "To deploy applications",
      "To write server-side code",
    ],
    correctOptionIndex: 0,
  },
  {
    question:
      "Which software development model involves a sequential process of planning, designing, coding, testing, and maintenance?",
    options: ["Agile", "Waterfall", "Scrum", "Extreme Programming"],
    correctOptionIndex: 1,
  },
];
export const dataScienceAIQuestions: Question[] = [
  {
    question: "What is the main goal of supervised learning?",
    options: [
      "To classify data into predefined categories",
      "To discover hidden patterns in unlabeled data",
      "To make predictions based on input data",
      "To optimize a function to minimize error",
    ],
    correctOptionIndex: 2,
  },
  {
    question:
      "What is the term used to describe the process of preparing data for analysis?",
    options: [
      "Data wrangling",
      "Data modeling",
      "Data visualization",
      "Data mining",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which algorithm is commonly used for classification tasks?",
    options: [
      "Linear regression",
      "K-means clustering",
      "Decision trees",
      "Principal Component Analysis",
    ],
    correctOptionIndex: 2,
  },
  {
    question: "What is the purpose of regularization in machine learning?",
    options: [
      "To reduce bias and variance",
      "To increase the complexity of the model",
      "To decrease the complexity of the model",
      "To speed up the training process",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "What is the role of activation functions in neural networks?",
    options: [
      "To calculate the error between predicted and actual output",
      "To initialize the weights of the network",
      "To determine the output of each neuron",
      "To select the best features for the model",
    ],
    correctOptionIndex: 2,
  },
  {
    question:
      "Which technique is used to reduce the dimensionality of data while preserving most of its variance?",
    options: [
      "Principal Component Analysis (PCA)",
      "K-means clustering",
      "Decision trees",
      "Linear regression",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "What is the objective of unsupervised learning?",
    options: [
      "To classify data into predefined categories",
      "To discover hidden patterns in unlabeled data",
      "To make predictions based on input data",
      "To optimize a function to minimize error",
    ],
    correctOptionIndex: 1,
  },
  {
    question:
      "What is the difference between overfitting and underfitting in machine learning?",
    options: [
      "Overfitting occurs when the model is too simple, and underfitting occurs when the model is too complex",
      "Overfitting occurs when the model performs well on training data but poorly on unseen data, and underfitting occurs when the model performs poorly on both training and unseen data",
      "Overfitting occurs when the model performs poorly on training data but well on unseen data, and underfitting occurs when the model performs well on training data but poorly on unseen data",
      "Overfitting and underfitting are two names for the same problem",
    ],
    correctOptionIndex: 1,
  },
  {
    question: "What is the purpose of cross-validation in machine learning?",
    options: [
      "To train the model using multiple algorithms",
      "To evaluate the performance of the model on unseen data",
      "To split the data into training and testing sets",
      "To optimize the hyperparameters of the model",
    ],
    correctOptionIndex: 1,
  },
  {
    question: "Which algorithm is commonly used for regression tasks?",
    options: [
      "K-nearest neighbors",
      "Random forest",
      "Logistic regression",
      "Linear regression",
    ],
    correctOptionIndex: 3,
  },
];

export const informationSecurityQuestions: Question[] = [
  {
    question: "What does VPN stand for?",
    options: [
      "Virtual Private Network",
      "Virtual Personal Network",
      "Virtual Private Number",
      "Virtual Proxy Network",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Which of the following is not an authentication factor?",
    options: [
      "Something you know",
      "Something you have",
      "Something you are",
      "Somewhere you are",
    ],
    correctOptionIndex: 3,
  },
  {
    question: "What is the purpose of a firewall in network security?",
    options: [
      "To prevent unauthorized access",
      "To encrypt data transmissions",
      "To store sensitive information",
      "To manage network traffic",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "What is a common method for securing wireless networks?",
    options: ["MAC filtering", "Firewall", "VPN", "Data encryption"],
    correctOptionIndex: 3,
  },
  {
    question: "What does SSL/TLS stand for in the context of web security?",
    options: [
      "Secure Sockets Layer / Transport Layer Security",
      "Secure Server Login / Transaction Layer Security",
      "System Security Layer / Transfer Layer Security",
      "Secure Storage Layer / Terminal Layer Security",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "What is a common method for protecting against malware?",
    options: [
      "Antivirus software",
      "Firewall",
      "Data encryption",
      "Virtual Private Network",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "What is the main purpose of encryption in information security?",
    options: [
      "To prevent unauthorized access",
      "To speed up data transmission",
      "To compress data",
      "To manage network traffic",
    ],
    correctOptionIndex: 0,
  },
  {
    question:
      "Which type of attack involves tricking a user into providing confidential information?",
    options: ["Phishing", "DDoS", "Man-in-the-middle", "SQL injection"],
    correctOptionIndex: 0,
  },
  {
    question: "What does the acronym CIA stand for in information security?",
    options: [
      "Confidentiality, Integrity, Availability",
      "Cybersecurity, Identity, Authorization",
      "Computer Incident Assessment",
      "Certified Information Analyst",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "What is a common method for protecting data at rest?",
    options: [
      "Data encryption",
      "Firewall",
      "Antivirus software",
      "Intrusion detection system",
    ],
    correctOptionIndex: 0,
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
    title: "Notes/Lectures",
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
  {
    id: 7,
    title: "Workshop",
    icon: Groups2Icon,
    route: appRoute.DASHBOARDS.TEACHER.ADD_WORKSHOP,
  },
  {
    id: 8,
    title: "Requests",
    icon: RequestQuoteIcon,
    route: appRoute.DASHBOARDS.TEACHER.REQUEST,
  },
];
