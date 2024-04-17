"use client";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import logo from "../../../../../public/images/smallLogo.jpeg";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";
import { useFormik } from "formik";
import { validationSchema } from "@/validations/addNewCourseValidationSchema";
import { UserType, UserRole } from "@/api/user";
import { createNewUser } from "@/api/user";
import { toastSuccessMessage, toastErrMessage } from "@/utils/functions";
import { adminDashboardMenuItem, gqlErrorCodes } from "@/utils/constant";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import { Container } from "../../../../styles/newCourseFormStyle";
import DashboardLayout from "@/components/DashboardLayout";
import { CourseType } from "@/api/course";
import { TeacherType, getAllTeachers } from "@/api/teacher";
import { courseLevel } from "@/utils/constant";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { uploadFileToFBStorageAndGetURL } from "@/api/common";
import { AddNewCourse } from "@/api/course";

const languages = [
  { id: 1, value: "English", label: "English" },
  { id: 2, value: "Urdu", label: "Urdu" },
  { id: 3, value: "German", label: "German" },
  { id: 4, value: "Hindi", label: "Hindi" },
];
const categories = [
  { id: 1, value: "Software Development", label: "Software Development" },
  { id: 2, value: "AI & Data Science", label: "AI & Data Science" },
  { id: 3, value: "Information Security", label: "Information Security" },
];

const NewCourse = () => {
  const router = useRouter();
  const [courseData, setCourseData] = useState<CourseType>({
    name: "",
    category: "",
    description: "",
    price: "",
    level: "",
    duration: "",
    preRequisites: "",
    coverPhotoUrl: "",
    language: "",
    isCertified: "",
    startDate: "",
    endDate: "",
    teacher: "",
    rating: 0.0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [teachers, setTeachers] = useState<TeacherType[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const getTeachers = async () => {
    try {
      const response = await getAllTeachers();
      setTeachers(response ?? []);
    } catch (error) {
      alert("Something is went wrong.");
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);

  const onChangeFile = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file = target?.files?.[0];
    if (file) {
      setFile(file);
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { url, success } = await uploadFileToFBStorageAndGetURL(
        `userProfile/${Date.now()}${file?.name}`,
        file
      );
      if (success) {
        const course = {
          ...courseData,
          isCertified: courseData.isCertified === "Yes" ? true : false,
          coverPhotoUrl: url,
        };
        const res = await AddNewCourse(course);
        if (res?.success) {
          setCourseData({
            name: "",
            category: "",
            description: "",
            price: "",
            level: "",
            duration: "",
            preRequisites: "",
            coverPhotoUrl: "",
            language: "",
            isCertified: "",
            startDate: "",
            endDate: "",
            teacher: "",
            rating: 0.0,
          });
          toastSuccessMessage("Course added.");
        } else {
          toastErrMessage("Somethingis went wrong.");
        }
      } else {
        toastErrMessage("An error occurred while uploading file.");
      }
      // Your form submission logic goes here
    } catch (error) {
      toastErrMessage("Something is went wrong.");
      console.error("Error occurred while submitting form: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <DashboardLayout menuItemList={adminDashboardMenuItem}>
      <Container>
        <Form
          className="sign-up-form-class"
          style={{ backgroundColor: "#FFFFFF" }}
          onSubmit={handleSubmit}
        >
          <div style={{ marginBottom: "30px", textAlign: "center" }}>
            <Image
              src={logo}
              width={80}
              height={80}
              className="rounded-full"
              alt="logo"
              style={{ margin: "auto" }}
            />
            <p className="sign-up-label" style={{ fontWeight: "bold" }}>
              Add New Course{" "}
            </p>
          </div>
          <Form.Group controlId="formGridFirstName" className="mb-1.5">
            <Form.Label className="mb-0.5">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the name of the course"
              name="name"
              value={courseData.name}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGridFatherName" className="mb-1.5">
            <Form.Label className="mb-0.5">Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the description of the course"
              name="description"
              value={courseData.description}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the price"
              name="price"
              value={courseData.price}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridFatherName"
            className="mb-1.5"
          >
            <Form.Label className="mb-0.5">Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={courseData.category}
              name="category"
              onChange={handleOnSelect}
            >
              <option value="">Select category</option>
              {categories.map((category, index) => (
                <option key={category.id + index} value={category.value}>
                  {category.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Pre requisites:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the pre-req"
              name="preRequisites"
              value={courseData.preRequisites}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridFatherName"
            className="mb-1.5"
          >
            <Form.Label className="mb-0.5">Course level</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={courseData.level}
              name="level"
              onChange={handleOnSelect}
            >
              <option value="">Select level</option>
              <option value={courseLevel[1]}>{courseLevel[1]}</option>
              <option value={courseLevel[2]}>{courseLevel[2]}</option>
              <option value={courseLevel[3]}>{courseLevel[3]}</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Duration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the duration"
              name="duration"
              value={courseData.duration}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Start Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="dd/mm/yyyy"
              name="startDate"
              value={courseData.startDate}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">End Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="dd/mm/yyyy"
              name="endDate"
              value={courseData.endDate}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridFatherName"
            className="mb-1.5"
          >
            <Form.Label className="mb-0.5">Language</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={courseData.language}
              name="language"
              onChange={handleOnSelect}
            >
              <option value="">Select language</option>
              {languages.map((language) => (
                <option key={language.id} value={language.value}>
                  {language.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label className="mb-0.5">Teacher</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="teacher"
              onChange={handleOnSelect}
            >
              <option value="">Select teacher</option>
              {teachers.map((t) => {
                return (
                  <option
                    value={t.id}
                    key={t.id}
                  >{`${t.user.firstName} ${t.user.lastName}`}</option>
                );
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridFatherName"
            className="mb-1.5"
          >
            <Form.Label className="mb-0.5">Is Certified?</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={courseData.isCertified ? "Yes" : "No"}
              name="isCertified"
              onChange={handleOnSelect}
            >
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Upload Cover Photo:</Form.Label>
            <Form.Control
              type="file"
              onChange={onChangeFile}
              accept=".jpeg,.png,.jpg"
              required
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              startIcon={
                isLoading ? (
                  <CircularProgress size={22} color="warning" />
                ) : (
                  <HowToRegIcon />
                )
              }
              style={{
                background: "#002D5F",
                width: "300px",
                borderRadius: "20px",
              }}
            >
              Add Course
            </Button>
          </div>
        </Form>
      </Container>
    </DashboardLayout>
  );
};

export default NewCourse;
