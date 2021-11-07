import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Service from "../Service/Service";
import Fluoride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import Teath from "../../../images/whitening.png";
import { Container, Typography } from "@mui/material";

const services = [
  {
    img: Fluoride,
    name: "Fluoride Treatmet",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, veniam. Nihil, laudantium culpa rem aspernatur a accusantium beatae in eius.",
  },
  {
    img: Cavity,
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, veniam. Nihil, laudantium culpa rem aspernatur a accusantium beatae in eius.",
  },
  {
    img: Teath,
    name: "Teath Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, veniam. Nihil, laudantium culpa rem aspernatur a accusantium beatae in eius.",
  },
];
const Services = () => {
  return (
    <>
      <Container>
        <Typography
          sx={{ mt: 2, color: "primary.main" }}
          variant="h5"
          component="div"
        >
          Services We Provide
        </Typography>
        <Typography sx={{ mb: 3, mt: 1 }} variant="h3" component="div">
          Services We Provide
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <Service key={service.name} service={service}></Service>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Services;
