"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import logo from "../../../../../public/images/smallLogo.jpeg";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";
import { useFormik } from "formik";
import { validationSchema } from "@/validations/addNewCourseValidationSchema";
import { UserType, UserRole, AddCourseType, AddNewCourse } from "@/api/user";
import { createNewUser } from "@/api/user";
import { toastSuccessMessage, toastErrMessage } from "@/utils/functions";
import { adminDashboardMenuItem, gqlErrorCodes } from "@/utils/constant";
import CircularProgress from "@mui/material/CircularProgress";
import { uploadFileToFBStorageAndGetURL } from "@/api/common";
import { useRouter } from "next/navigation";
import { Container } from "../../../../styles/newCourseFormStyle";
import DashboardLayout from "@/components/DashboardLayout";
import { CourseType } from "@/api/course";
import { TeacherType } from "@/api/teacher";

const NewCourse = () => {
  const router = useRouter();
  const [courseData, setCourseData] = useState<CourseType>({
    name: "",
    category: "",
    description: "",
    price: "",
    level: 1,
    duration: "",
    preRequisites: "",
    coverPhotoUrl: "",
    language: "",
    isCertified: false,
    rating: 0.0,
    startDate: 0,
    endDate: 0,
    teacher: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [teachers,setTeachers]=useState<TeacherType[]>([])
  const [file, setFile] = useState<File | null>(null);
  const {
    errors,
    values,
    touched,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: courseData,
    validationSchema: validationSchema,
    onSubmit: async (values: CourseType) => {
      try {
        setIsLoading(true);
        const { url, success } = await uploadFileToFBStorageAndGetURL(
          `userProfile/${Date.now()}${file?.name}`,
          file
        );

        if (success) {
          const level = (values.level, 10);
          // const response = await AddNewCourse({
          //   ...values,
          //   level,
          //   coverPhotoUrl: "url",
          //   updatedAt: Math.floor(Date.now() / 1000),
          //   createdAt: Math.floor(Date.now() / 1000),
          //   rating: 0,
          //   startDate: Math.floor(Date.now() / 1000),
          //   endDate: Math.floor(Date.now() / 1000),
          //   teacher:
          //     values.teacher == "Samad" ? "65f98fee7955bcc114f6fc81" : "",
          //   students:
          //     values.students == "Samad" ? "65fb16b87955bcc114f6fc8f" : "",
          // });

          // console.log(response, "values");

          // if (response?.success) {
          //   console.log(values, "values");

          //   setIsLoading(false);
          //   setUserData({
          //     name: "",
          //     category: "",
          //     description: "",
          //     price: "",
          //     level: 0,
          //     duration: 0,
          //     preRequisites: "",
          //     coverPhotoUrl: "",
          //     language: "",
          //     rating: 0,
          //     isCertified: true,
          //   });
          //   toastSuccessMessage("Course added successfully.");
          //   router.push("/");
          // } else if (
          //   response?.code === gqlErrorCodes.alreadyExist &&
          //   !response?.success
          // ) {
          //   setIsLoading(false);
          //   toastErrMessage("Course is already exist.");
          // }
        } else {
          setIsLoading(false);
          toastErrMessage("An error occurred while uploading the picture.");
        }
      } catch (error) {
        setIsLoading(false);
        toastErrMessage("An error occurred while processing your request.");
      }
    },
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFieldValue(name, value.trim());
    setFieldTouched(name, true, false);
  };
  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFieldValue(name, value.trim());
    setFieldTouched(name, true, false);
  };
  const handleOnSelect = (e: React.FocusEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setFieldValue(name, value);
    setFieldTouched(name, true, false);
  };
  const onChangeFile = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file = target?.files?.[0];
    if (file) {
      setFile(file);
    }
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
            <p className="sign-up-label">Add New Course </p>
          </div>
          <Form.Group controlId="formGridFirstName" className="mb-1.5">
            <Form.Label className="mb-0.5">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the name of the course"
              name="name"
              onBlur={handleOnBlur}
              value={values.name}
              onChange={handleOnChange}
              required
            />
            {touched.name && errors.name ? (
              <p className="errorMessage">{errors.name}</p>
            ) : null}
          </Form.Group>
          <Form.Group controlId="formGridFatherName" className="mb-1.5">
            <Form.Label className="mb-0.5">Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the description of the course"
              name="description"
              onBlur={handleOnBlur}
              value={values.description}
              onChange={handleOnChange}
              required
            />
            {touched.description && errors.description ? (
              <p className="errorMessage">{errors.description}</p>
            ) : null}
          </Form.Group>

          <Form.Group controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the price"
              name="price"
              onBlur={handleOnBlur}
              value={values.price}
              onChange={handleOnChange}
              required
            />
            {touched.price && errors.price ? (
              <p className="errorMessage">{errors.price}</p>
            ) : null}
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridFatherName"
            className="mb-1.5"
          >
            <Form.Label className="mb-0.5">Select the Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={values.category}
              name="category"
              onChange={handleOnSelect}
            >
              <option value={"Javascript"}>Javascript</option>
              <option value={"Typescript"}>Typescript</option>
              <option value={"Java"}>Java</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Pre requisites:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the pre-req"
              name="preRequisites"
              onBlur={handleOnBlur}
              value={values.preRequisites}
              onChange={handleOnChange}
              required
            />
            {touched.preRequisites && errors.preRequisites ? (
              <p className="errorMessage">{errors.preRequisites}</p>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Level</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the level"
              name="level"
              onBlur={handleOnBlur}
              value={values.level}
              onChange={handleOnChange}
              required
            />
            {touched.level && errors.level ? (
              <p className="errorMessage">{errors.level}</p>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">duration</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the level"
              name="duration"
              onBlur={handleOnBlur}
              value={values.duration}
              onChange={handleOnChange}
              required
            />
            {touched.duration && errors.duration ? (
              <p className="errorMessage">{errors.duration}</p>
            ) : null}
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridFatherName"
            className="mb-1.5"
          >
            <Form.Label className="mb-0.5">Select the language</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={values.language}
              name="language"
              onChange={handleOnSelect}
            >
              <option value={"English"}>English</option>
              <option value={"Urdu"}>Urdu</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridFatherName"
            className="mb-1.5"
          >
            <Form.Label className="mb-0.5">Select the Teacher</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={values.teacher}
              name="teacher"
              onChange={handleOnSelect}
            >
              {teachers.map((teacher:TeacherType, index) => (
                <option key={index} value={teacher?.name}>
                  {teacher?.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridFatherName"
            className="mb-1.5"
          >
            <Form.Label className="mb-0.5">Select the Student</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={values.students}
              name="student"
              onChange={handleOnSelect}
            >
              <option value={"Samad"}> Samad Saleem</option>
              <option value={"Waqar"}>Waqar Khan</option>
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
