import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Calendar from "../../Shared/Calendar/Calendar";
import React, { useState } from "react";
import AppointmentsByDay from "../AppointmentsByDay/AppointmentsByDay";

const DashbordHome = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={5}>
          <Calendar
            sx={{ width: "500px" }}
            date={date}
            setDate={setDate}
          ></Calendar>
        </Grid>
        <Grid item xs={12} sm={4} md={7}>
          <AppointmentsByDay date={date} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashbordHome;
