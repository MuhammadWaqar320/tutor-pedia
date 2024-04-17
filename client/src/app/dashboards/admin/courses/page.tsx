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
import { deleteCourse, getCourses } from "@/api/course";
import { CourseType } from "@/api/course";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toastErrMessage, toastSuccessMessage } from "@/utils/functions";

const Courses = () => {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const fetchCourses = async () => {
    const data = await getCourses();
    if (data) {
      setCourses(data);
    } else {
      toastErrMessage("An error occurred while fetching courses.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [isUpdated]);

  const handleDelete = async (id: string): Promise<void> => {
    try {
      const response = await deleteCourse(id);
      if (response?.success) {
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
                IsCertified
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Duration
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Price
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course: CourseType) => (
              <TableRow
                key={course.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{course.name}</TableCell>
                <TableCell align="center">{course.category}</TableCell>
                <TableCell align="center">{course.level}</TableCell>
                <TableCell align="center">{course.language}</TableCell>
                <TableCell align="center">
                  {course.isCertified ? "Yes" : "No"}
                </TableCell>
                <TableCell align="center">{course.duration}</TableCell>
                <TableCell align="center">${course.price}</TableCell>
                <TableCell align="center">
                  {" "}
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "red",
                    }}
                    onClick={() => handleDelete(course?.id ?? "")}
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

export default Courses;
