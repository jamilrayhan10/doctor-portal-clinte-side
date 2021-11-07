import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardMedia, Container, Typography } from "@mui/material";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Calendar from "../../Shared/Calendar/Calendar";
const bgImg = {
  background: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(45,58, 74, .8)",
  backgroundBlendMode: "darken, luminosity",
  padding: "50px 0",
};

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <>
      <Box style={bgImg} sx={{ flexGrow: 1, mb: 5 }}>
        <Container>
          <Typography
            sx={{ mt: 2 }}
            style={{ fontWeight: 700, color: "white", paddingBottom: "20px" }}
            variant="h4"
            component="div"
          >
            Appointment Header
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              <Box style={{ width: "100%", border: "20px solid gray" }}>
                <Calendar date={date} setDate={setDate} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              <CardMedia
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: 25,
                  border: "20px solid gray",
                }}
                component="img"
                image={chair}
                alt="Paella dish"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AppointmentHeader;
