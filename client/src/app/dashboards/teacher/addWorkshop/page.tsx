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
import { NotesType, AddNewNotes } from "@/api/notes";
import { createWorkshop } from "@/api/workshop";
import useAppContext from "@/hooks/useAppContext";

const types = [
  { id: 1, value: "Paid Workshop", label: "Paid Workshop" },
  { id: 2, value: "Public Workshop", label: "Public Workshop" },
];

const AddWorkshop = () => {
  const [workshopData, setworkshopData] = useState<any>({
    type: "",
    dateTime: "",
    noOfStudents: 10,
    detail: "",
    link: "",
    duration: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const { user } = useAppContext();

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await createWorkshop({
        type: workshopData.type,
        date: workshopData.dateTime,
        teacherId: user?.id ?? "",
        noOfStudents: workshopData.noOfStudents,
        meetingLink: workshopData.link,
        detail: workshopData.detail,
        duration: workshopData.duration,
      });

      toastSuccessMessage("Workshop created successfully.");
      setworkshopData({
        type: "",
        dateTime: "",
        noOfStudents: 10,
        detail: "",
        link: "",
        duration: "",
      });
    } catch (error) {
      toastErrMessage("Something is went wrong.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setworkshopData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setworkshopData((prevData: any) => ({
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
              Schedule Session/Workshop
            </p>
          </div>
          <Form.Group
            as={Col}
            controlId="formGridFatherName"
            className="mb-1.5"
          >
            <Form.Label className="mb-0.5">Workshop Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={workshopData.type}
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
          <Form.Group controlId="formGridFirstName" className="mb-1.5">
            <Form.Label className="mb-0.5">Detail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter detail of workshop"
              name="detail"
              value={workshopData.detail}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGridFirstName" className="mb-1.5">
            <Form.Label className="mb-0.5">Workshop duration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter duration"
              name="duration"
              value={workshopData.duration}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Workshop Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="dd/mm/yyyy"
              name="dateTime"
              value={workshopData.dateTime} // convert back to "yyyy-mm-dd" format
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          {workshopData.type === "Public Workshop" ? (
            <Form.Group controlId="formGridFirstName" className="mb-1.5">
              <Form.Label className="mb-0.5">No. of students</Form.Label>
              <Form.Control
                type="number"
                name="noOfStudents"
                value={workshopData.noOfStudents}
                onChange={handleOnChange}
                readOnly
              />
            </Form.Group>
          ) : null}

          <Form.Group
            controlId="formGridFirstName"
            className="mb-1.5"
            style={{ marginTop: "5px" }}
          >
            <Button
              type="button"
              variant="outlined"
              style={{ marginBottom: "5px" }}
              onClick={() =>
                setworkshopData({
                  ...workshopData,
                  link: "https://meet.google.com/vcs-rooo-fxj",
                })
              }
              startIcon={
                <img
                  width="30px"
                  height="30px"
                  src="https://static-00.iconduck.com/assets.00/google-meet-icon-2048x2048-js4zjooy.png"
                />
              }
            >
              Generate Meeting Link
            </Button>
          </Form.Group>
          <p style={{ color: "#6a9dfc" }}>{workshopData.link}</p>
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
              Schedule Workshop
            </Button>
          </div>
        </Form>
      </Container>
    </DashboardLayout>
  );
};

export default AddWorkshop;
