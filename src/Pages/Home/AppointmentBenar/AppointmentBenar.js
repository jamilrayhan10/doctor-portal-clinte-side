import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, CardMedia, Typography } from "@mui/material";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";

const bgImg = {
  width: "100%",
  background: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  backgroundColor: "rgba(45,58,74, .8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 200,
};

const AppointmentBenar = () => {
  return (
    <>
      <Box style={bgImg} sx={{ flexGrow: 1, my: 5 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            style={{ margin: "auto", textAlign: "center" }}
          >
            <CardMedia
              style={{
                marginTop: "-250px",
                width: "auto",
                textAlign: "center",
              }}
              component="img"
              image={doctor}
              alt="Paella dish"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ textAlign: "left", padding: "30px" }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography
                sx={{ mt: 2, color: "primary.main" }}
                style={{
                  color: "white",
                  fontWeight: 700,
                }}
                variant="h4"
                component="div"
              >
                Make ad Appointment today.
              </Typography>
              <Typography
                sx={{ my: 4 }}
                style={{ color: "white" }}
                component="div"
              >
                To get started with React Router in a web app, you’ll need a
                React web app. If you need to create one, we recommend you try
                Create React App. It’s a popular tool that works really well
                with React Router. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Voluptatibus accusamus, ex facere ad dolore
                nisi accusantium. Itaque dolores ratione perferendis.
              </Typography>

              <Button
                sx={{ mt: 2 }}
                style={{ backgroundColor: "#09CFC9" }}
                variant="contained"
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AppointmentBenar;
