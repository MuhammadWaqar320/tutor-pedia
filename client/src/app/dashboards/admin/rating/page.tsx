"use client";
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
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteUser } from "@/api/user";
import { toastErrMessage, toastSuccessMessage } from "@/utils/functions";
import { getAllTeachersFeedback } from "@/api/teacher";
import { getAllStudents } from "@/api/student";
import { getAllTeachers } from "@/api/teacher";
import StarIcon from "@mui/icons-material/Star";

const Rating = () => {
  const [feedback, setFeedback] = useState<any>([]);
  const [teacher, setTeacher] = useState<any>([]);
  const [student, setStudent] = useState<any>([]);

  const fetchFeedbacks = async () => {
    try {
      const fb = await getAllTeachersFeedback();
      const teacherData = await getAllTeachers();

      if (fb) {
        const formattedFeedbacks = fb.map((feedback: any) => {
          // Find student and teacher details
          const teacher = teacherData?.find(
            (teacher) => teacher.id === feedback.teacher.id
          );

          // Extract first and last name of student and teacher
          const studentFirstName = feedback?.student?.firstName ?? "";
          const studentLastName = feedback?.student?.lastName ?? "";
          const teacherFirstName = teacher?.user.firstName ?? "";
          const teacherLastName = teacher?.user.lastName ?? "";

          return {
            rating: feedback.rating,
            feedback: feedback.feedback,
            studentFirstName,
            studentLastName,
            teacherFirstName,
            teacherLastName,
          };
        });

        setFeedback(formattedFeedbacks);
      } else {
        toastErrMessage("An error occurred while fetching feedback.");
      }
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      toastErrMessage("An error occurred while fetching feedback.");
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <DashboardLayout menuItemList={adminDashboardMenuItem}>
      <TableContainer component={Paper}>
        <h1
          style={{
            textAlign: "center",
            borderBottom: "1px solid silver",
            padding: "15px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Feedback
        </h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Teacher Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Student Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Feedback
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Rating
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedback.map((feedback: any) => (
              <TableRow
                key={feedback.teacherFirstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  {feedback.teacherFirstName} {feedback.teacherLastName}
                </TableCell>
                <TableCell align="center">
                  {feedback.studentFirstName} {feedback.studentLastName}
                </TableCell>
                <TableCell align="center">{feedback.feedback}</TableCell>
                <TableCell align="center">
                  {feedback.rating}{" "}
                  <StarIcon
                    style={{
                      color: "orange",
                      marginLeft: "-5px",
                      fontSize: "18px",
                      marginBottom: "2px",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};

export default Rating;
