import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, CardMedia, Container, Typography } from "@mui/material";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

const bgImg = {
  background: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(45,58,74, .8)",
  backgroundBlendMode: "darken, luminosity",
  padding: "100px 0",
};
const Bennar = () => {
  return (
    <>
      <Box style={bgImg} sx={{ flexGrow: 1, mb: 5 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              style={{ textAlign: "left" }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box>
                <Typography
                  sx={{ mt: 2 }}
                  style={{ fontWeight: 700, color: "white" }}
                  variant="h4"
                  component="div"
                >
                  Your New Simple <br />
                  Start Here.
                </Typography>
                <Typography
                  sx={{ mt: 2 }}
                  style={{ color: "white" }}
                  component="div"
                >
                  To get started with React Router in a web app, you’ll need a
                  React web app. If you need to create one, we recommend you try
                  Create React App. It’s a popular tool that works really well
                  with React Router.
                </Typography>

                <Button
                  sx={{ mt: 2 }}
                  style={{ backgroundColor: "#09CFC9 " }}
                  variant="contained"
                >
                  Get Appointment
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                style={{ width: "100%" }}
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

export default Bennar;
