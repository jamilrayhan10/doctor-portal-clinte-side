import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";
const bookings = [
  { id: 1, name: "Teeth Orthodontics", time: "08.00 AM - 09.00 AM", space: 10 },
  { id: 2, name: "Cosmetic Dentistry", time: "09.00 AM - 10.00 AM", space: 10 },
  { id: 3, name: "Teeth Cleaning", time: "10.00 AM -11.00 AM", space: 10 },
  { id: 4, name: "Cavity Protection", time: "11.00 AM - 12.00 PM", space: 10 },
  { id: 5, name: "Teeth Orthodontics", time: "02.00 PM - 03.00 PM", space: 10 },
  { id: 6, name: "Teeth Orthodontics", time: "03.00 AM - 04.00 Am", space: 10 },
];

const AvailableAppointment = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
      <Typography
        sx={{ mt: 2, color: "info.main" }}
        style={{ fontWeight: 300 }}
        variant="h4"
        component="div"
      >
        Available Appointment {date.toDateString()}
      </Typography>
      {bookingSuccess && <Alert severity="success"> booking success !</Alert>}

      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
