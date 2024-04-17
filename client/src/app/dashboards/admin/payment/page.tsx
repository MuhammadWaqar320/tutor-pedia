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
import { getAllPayments } from "@/api/payment";
import { deleteUser } from "@/api/user";
import { toastErrMessage, toastSuccessMessage } from "@/utils/functions";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const Payments = () => {
  const [payments, setPayments] = useState<any>([]);

  const fetchPayments = async () => {
    const data = await getAllPayments();
    if (data) {
      setPayments(data);
    } else {
      toastErrMessage("An error occurred while fetching Payments.");
    }
  };

  useEffect(() => {
    fetchPayments();
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
          Payments
        </h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Payment Id
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Student Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Payment Amount
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Payment Date
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Course Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Is Verified
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((p: any) => (
              <TableRow
                key={p.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{p.id}</TableCell>
                <TableCell align="center">
                  {`${p.user.firstName} ${p.user.lastName}`}
                </TableCell>
                <TableCell align="center">{p.amount}</TableCell>
                <TableCell align="center">
                  {new Date(p.paymentDate).toLocaleDateString()}
                </TableCell>

                <TableCell align="center">{p.course.name}</TableCell>
                <TableCell align="center">
                  {p.verified ? (
                    <DoneIcon color="success" />
                  ) : (
                    <CloseIcon color="error" />
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

export default Payments;
