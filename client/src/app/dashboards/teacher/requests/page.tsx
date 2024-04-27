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
import { getRequests } from "@/api/workshopRequest";
import Switch from "@mui/material/Switch";
import { teacherDashboardMenuItem } from "@/utils/constant";
import { updateRequest } from "@/api/workshopRequest";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Request = () => {
  const [requests, setrequest] = useState<any>([]);
  const [status, setStatus] = React.useState<Record<string, string>>({});

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

  const handleOnSelect = async (value: string, id: string) => {
    try {
      const res = await updateRequest({
        id: id,
        status: value,
      });

      if (res.success) {
        setStatus({
          ...status,
          [id]: value,
        });
      } else {
        toastErrMessage("something is went wrong.");
      }
    } catch (error) {
      toastErrMessage("something is went wrong.");
    }
  };

  return (
    <DashboardLayout menuItemList={teacherDashboardMenuItem}>
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
          Students Requests For Workshops
        </h2>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Request Id
              </TableCell>
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
                Student Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Reject/Accept
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((n: any) => (
              <TableRow
                key={n.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{n.id}</TableCell>
                <TableCell align="center">{n.status}</TableCell>
                <TableCell align="center">{n.workShopId.id}</TableCell>
                <TableCell align="center">{n.workShopId.date}</TableCell>
                <TableCell align="center">
                  {n.userId.firstName + " " + n.userId.lastName}
                </TableCell>
                <TableCell align="center">
                  <Form.Select
                    aria-label="Default select example"
                    value={status[n.id]}
                    name="type"
                    onChange={(e) => handleOnSelect(e.target.value, n.id)}
                  >
                    <option value="">Change</option>
                    {[...new Set(["Accepted", "Rejected"])].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </Form.Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};

export default Request;
