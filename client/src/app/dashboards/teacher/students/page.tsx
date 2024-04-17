"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { teacherDashboardMenuItem } from "@/utils/constant";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StudentType, deleteStudent } from "@/api/student";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getAllStudents } from "@/api/student";
import { deleteUser } from "@/api/user";
import { toastErrMessage, toastSuccessMessage } from "@/utils/functions";

const Students = () => {
  const [students, setStudents] = useState<StudentType[]>([]);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const fetchStudents = async () => {
    const data = await getAllStudents();
    if (data) {
      setStudents(data);
    } else {
      toastErrMessage("An error occurred while fetching students.");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [isUpdated]);


  return (
    <DashboardLayout menuItemList={teacherDashboardMenuItem}>
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
          Students
        </h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                First Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Last Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Phone No
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student: StudentType) => (
              <TableRow
                key={student.user.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{student.user.firstName}</TableCell>
                <TableCell align="center">{student.user.lastName}</TableCell>
                <TableCell align="center">{student.user.email}</TableCell>
                <TableCell align="center">{student.user.phoneNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};

export default Students;
