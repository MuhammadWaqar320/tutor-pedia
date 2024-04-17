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
import { getCourses } from "@/api/course";
import { courseLevel } from "@/utils/constant";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { uploadFileToFBStorageAndGetURL } from "@/api/common";
import { AddNewCourse } from "@/api/course";
import { teacherDashboardMenuItem } from "@/utils/constant";
import { AssessmentType, AddNewAssessment } from "@/api/assessment";

const types = [
  { id: 1, value: "Open Book Quiz", label: "Open Book Quiz" },
  { id: 2, value: "Assignment", label: "Assignment" },
  { id: 3, value: "Practice", label: "Practice" },
  { id: 4, value: "Open Book Paper", label: "Open Book Paper"},
];

const AddAssessments = () => {

  const [assessmentData, setAssessmentData] = useState<AssessmentType>({
    type: "",
    fileUrl: "",
    deadline: "",
    course: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const getCourseData = async () => {
    try {
      const response = await getCourses();
      setCourses(response ?? []);
    } catch (error) {
      alert("Something is went wrong.");
    }
  };

  useEffect(() => {
    getCourseData();
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
        `assessments/${Date.now()}${file?.name}`,
        file
      );
      if (success) {
        const assess = {
          ...assessmentData,
          fileUrl: url,
        };
        const res = await AddNewAssessment(assess);
        if (res?.success) {
          toastSuccessMessage("Assessment Uploaded.");
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
    setAssessmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setAssessmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <DashboardLayout menuItemList={teacherDashboardMenuItem}>
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
              Upload New Assessment{" "}
            </p>
          </div>
          <Form.Group controlId="formGridFirstName" className="mb-1.5">
            <Form.Label className="mb-0.5">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the name of assessment"
              name="name"
              value={assessmentData.name}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group
            as={Col}
            controlId="formGridFatherName"
            className="mb-1.5"
          >
            <Form.Label className="mb-0.5">Assessment Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={assessmentData.type}
              name="type"
              onChange={handleOnSelect}
            >
              <option value="">Select Type</option>
              {types.map((t) => (
                <option key={t.id} value={t.value}>
                  {t.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Deadline</Form.Label>
            <Form.Control
              type="date"
              placeholder="dd/mm/yyyy"
              name="deadline"
              value={assessmentData.deadline}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-1.5">
            <Form.Label className="mb-0.5">Course</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="course"
              onChange={handleOnSelect}
            >
              <option value="">Select Course</option>
              {courses.map((c) => {
                return (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Upload Pdf:</Form.Label>
            <Form.Control
              type="file"
              onChange={onChangeFile}
              accept=".pdf"
              required
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
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
              Upload Assessment
            </Button>
          </div>
        </Form>
      </Container>
    </DashboardLayout>
  );
};

export default AddAssessments;
