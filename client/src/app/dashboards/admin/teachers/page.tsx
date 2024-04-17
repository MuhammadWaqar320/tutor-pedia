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
import { getAllTeachers } from "@/api/teacher";
import { TeacherType } from "@/api/teacher";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTeacher } from "@/api/teacher";
import { deleteUser } from "@/api/user";
import { toastErrMessage, toastSuccessMessage } from "@/utils/functions";
const Teachers = () => {
  const [teachers, setTeachers] = useState<TeacherType[]>([]);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const fetchTeachers = async () => {
    const data = await getAllTeachers();
    if (data) {
      setTeachers(data);
    } else {
         toastErrMessage("An error occurred while fetching teachers.");
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, [isUpdated]);

  const handleDelete = async (id: string, userId: string): Promise<void> => {
    try {
      const response = await deleteTeacher(id);
      const res = await deleteUser(userId);
      if (response?.success && res?.success) {
        setIsUpdated(true);
        toastSuccessMessage("Data has been deleted");
      }
    } catch (error) {
        toastErrMessage("Something is went wrong.");
    }
  };
  return (
    <DashboardLayout menuItemList={adminDashboardMenuItem}>
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
          Teachers
        </h2>
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
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Qualification
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Specialization
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher: TeacherType) => (
              <TableRow
                key={teacher.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{teacher.user.firstName}</TableCell>
                <TableCell align="center">{teacher.user.lastName}</TableCell>
                <TableCell align="center">{teacher.user.email}</TableCell>
                <TableCell align="center">{teacher.user.phoneNo}</TableCell>
                <TableCell align="center">{teacher.qualification}</TableCell>
                <TableCell align="center">{teacher.specialization}</TableCell>
                <TableCell align="center">
                  {" "}
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "red",
                    }}
                    onClick={() => handleDelete(teacher.id, teacher?.user?.id??"")}
                  >
                    <DeleteIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};

export default Teachers;
