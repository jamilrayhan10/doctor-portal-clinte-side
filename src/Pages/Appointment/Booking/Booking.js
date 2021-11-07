import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4} sx={{ py: 5 }}>
        <Paper elevation={3} sx={{ py: 3 }}>
          <Typography
            sx={{ mt: 2, color: "info.main" }}
            style={{ fontWeight: 400 }}
            variant="h4"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{ mt: 2 }}
            style={{ fontWeight: 300, padding: 0, margin: 0 }}
            variant="h6"
            component="div"
          >
            {time}
          </Typography>
          <Typography
            sx={{ mt: 2 }}
            style={{ fontWeight: 300, padding: 0, margin: "0 0 15px 0" }}
            variant="body1"
            component="div"
          >
            {space} SPACE AVAILABLE
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            BOOKING APPOINTMENT
          </Button>
        </Paper>
      </Grid>

      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
