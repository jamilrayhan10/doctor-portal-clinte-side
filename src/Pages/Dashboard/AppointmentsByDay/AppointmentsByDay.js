import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AppointmentsByDay = ({ date }) => {
  const { user, token } = useAuth();
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);
  useEffect(() => {
    const url = `https://frozen-eyrie-76960.herokuapp.com/appointments?email=${
      user.email
    }&date=${date.toLocaleDateString()}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date, user.email, token]);

  return (
    <>
      <h2> Total Appointments {appointments.length}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="appointments table">
          <TableHead>
            <TableRow>
              <TableCell>patient name</TableCell>
              <TableCell>phone</TableCell>
              <TableCell>serviceName</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.serviceName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AppointmentsByDay;
