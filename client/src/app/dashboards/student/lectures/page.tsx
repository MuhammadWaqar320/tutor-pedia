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
import { NotesType, getNotes } from "@/api/notes";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

const Notes = () => {
  const [notes, setNotes] = useState<NotesType[]>([]);

  const fetchNotes = async () => {
    const data = await getNotes();
    if (data) {
      setNotes(data);
    } else {
      toastErrMessage("An error occurred while fetching courses.");
    }
  };

  useEffect(() => {
    fetchNotes();
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
          Record Lectures
        </h2>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Notes Type
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Course Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Uploaded Date
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Play Video
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes
              .filter((n) => n.type === "Recorded-lecture")
              .map((n: NotesType) => (
                <TableRow
                  key={n.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{n.name}</TableCell>
                  <TableCell align="center">{n.type}</TableCell>
                  <TableCell align="center">
                    {typeof n.course === "string" ? "" : n.course?.name ?? ""}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(n.uploadedDate ?? "").toLocaleString()}
                  </TableCell>

                  <TableCell align="center">
                    {" "}
                    <button style={{ color: "blue" }}>
                      <a href={n.fileUrl} download>
                       <SmartDisplayIcon/>
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

export default Notes;
