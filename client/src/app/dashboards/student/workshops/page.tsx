"use client";
import { studentDashboardMenuItem } from "@/utils/constant";
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
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
import { getRequests } from "@/api/workshopRequest";
import Switch from "@mui/material/Switch";
import { teacherDashboardMenuItem } from "@/utils/constant";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const WorkShop = () => {
  const [requests, setrequest] = useState<any>([]);
  const [status, setStatus] = React.useState<Record<string, string>>({});
  const { user } = useAppContext();

  const fetchRequest = async () => {
    const data = await getRequests();
    if (data) {
      setrequest(data);
    } else {
      toastErrMessage("An error occurred while fetching courses.");
    }
  };

  useEffect(() => {
    fetchRequest();
  }, [status]);

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
          Workshops Session
        </h2>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Request Status
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Workshop Id
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Workshop date
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Workshop detail
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Workshop link
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests
              .filter((r: any) => r?.userId?.id === user?.id)
              .map((n: any) => (
                <TableRow
                  key={n.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{n.status}</TableCell>
                  <TableCell align="center">{n.workShopId.id}</TableCell>
                  <TableCell align="center">
                    {n.workShopId.date + " " + "11:00 AM"}
                  </TableCell>
                  <TableCell align="center">{n.workShopId.detail}</TableCell>
                  <TableCell align="center">
                    {n.status === "Accepted" ? (
                      <a
                        href={n.workShopId.meetingLink}
                        style={{ color: "blue" }}
                      >
                        Join Meeting
                      </a>
                    ) : (
                      "No link"
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

export default WorkShop;
