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
import { toastErrMessage } from "@/utils/functions";
import useAppContext from "@/hooks/useAppContext";
import { AssessmentType, getAssessments } from "@/api/assessment";

const Assessment = () => {
  const [assessments, setAssessments] = useState<AssessmentType[]>([]);
  const { user } = useAppContext();

  const fetchAssessments = async () => {
    const data = await getAssessments();
    if (data) {
      setAssessments(data);
    } else {
      toastErrMessage("An error occurred while fetching courses.");
    }
  };

  useEffect(() => {
    fetchAssessments();
  }, []);

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
          Assessments
        </h2>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Assessment Type
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Course Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Uploaded Date
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Deadline
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Assessment File
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assessments.map((a: AssessmentType) => (
              <TableRow
                key={a.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{a.name}</TableCell>
                <TableCell align="center">{a.type}</TableCell>
                <TableCell align="center">
                  {typeof a.course === "string" ? "" : a.course?.name ?? ""}
                </TableCell>
                <TableCell align="center">
                  {new Date(a?.uploadedDate ?? "").toLocaleString()}
                </TableCell>
                <TableCell align="center">{a.deadline}</TableCell>

                <TableCell align="center">
                  {" "}
                  <button style={{ color: "blue" }}>
                    <a href={a.fileUrl} download>
                      Download
                    </a>
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

export default Assessment;
