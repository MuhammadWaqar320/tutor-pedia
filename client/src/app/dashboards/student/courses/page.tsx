"use client";
import { studentDashboardMenuItem } from "@/utils/constant";
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { adminDashboardMenuItem } from "@/utils/constant";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteCourse, getCourses } from "@/api/course";
import { CourseType } from "@/api/course";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toastErrMessage, toastSuccessMessage } from "@/utils/functions";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  renderToStream,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import useAppContext from "@/hooks/useAppContext";
import { getAllStudents, getStudentByUserId } from "@/api/student";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    padding: 20,
  },
  section: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    color: "#03245c",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "24px",
    marginTop: "20px",
  },
  line: {
    borderBottom: "2px solid #03245c",
    width: "400px",
    marginBottom: "10px",
  },
});
const MyPDF: React.FC<{ courseName: string; name: string }> = ({
  courseName,
  name,
}) => {
  // Create a new Date object

  const currentDate = new Date();

  // Extract individual date components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // January is 0, so we add 1
  const day = currentDate.getDate();

  // Format the date as a string
  const formattedDate = `${year}-${month}-${day}`;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/014/585/856/small/certificate-luxury-golden-medal-png.png"
            style={{ height: "100px" }}
          />
          <Text style={styles.heading}>Certificate of Completion</Text>
          <Text style={styles.line}></Text>
          <Text style={{ fontSize: "16px" }}>
            THIS CERTIFICATE IS PRESENTED TO
          </Text>
          <Text style={{ fontSize: "14px", marginTop: "10px" }}>{name}</Text>
          <Text
            style={{
              fontSize: "12px",
              marginTop: "50px",
              textAlign: "justify",
              marginBottom: "70px",
            }}
          >
            This document serves as an official acknowledgment that Waqar has
            met all the necessary criteria and has satisfactorily concluded the
            {courseName} course. {name} has diligently fulfilled all the
            requirements outlined in the course curriculum, demonstrating a
            comprehensive understanding of the {courseName}. Through dedication
            and effort, {name} has successfully completed all assignments,
            projects, and assessments, showcasing proficiency in both
            theoretical concepts and practical implementation. We congratulate
            Waqar on this significant achievement and wish them continued
            success in their future endeavors.
          </Text>
          <Text style={{ fontSize: "12px", marginTop: "10px" }}>
            Date: {formattedDate}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

const Courses = () => {
  const [courses, setCourses] = useState<any>([]);
  const { user } = useAppContext();

  const fetchCourses = async () => {
    const data = await getStudentByUserId(user?.id ?? "");
    if (data) {
      setCourses(data.courses);
    } else {
      toastErrMessage("An error occurred while fetching courses.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const isCourseCompleted = (endDate: string) => {
    const dateObject = new Date(endDate);
    const currentDate = new Date(); // Get current local date

    return dateObject <= currentDate;
  };

  return (
    <DashboardLayout menuItemList={studentDashboardMenuItem}>
      <TableContainer component={Paper}>
        <h2
          style={{
            textAlign: "center",
            borderBottom: "1px solid silver",
            padding: "15px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Courses
        </h2>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Category
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                course Level
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Language
              </TableCell>

              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Certificate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course: CourseType) => (
              <TableRow
                key={course.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{course.name}</TableCell>
                <TableCell align="center">{course.category}</TableCell>
                <TableCell align="center">{course.level}</TableCell>
                <TableCell align="center">{course.language}</TableCell>
                <TableCell align="center">
                  {isCourseCompleted(course.endDate as string) ? (
                    <div style={{ color: "green" }}>Completed</div>
                  ) : (
                    <div style={{ color: "blue" }}>In progress</div>
                  )}
                </TableCell>
                <TableCell align="center">
                  {isCourseCompleted(course.endDate as string) ? (
                    <PDFDownloadLink
                      document={
                        <MyPDF
                          courseName={course.name}
                          name={`${user?.firstName ?? ""} ${
                            user?.lastName ?? ""
                          }`}
                        />
                      }
                      fileName="certificate.pdf"
                    >
                      <button style={{ color: "blue" }}>Download</button>
                    </PDFDownloadLink>
                  ) : (
                    <div>Not Completed</div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};

export default Courses;
