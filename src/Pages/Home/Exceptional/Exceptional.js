import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import ExceptionalImg from "../../../images/treatment.png";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

const Exceptional = () => {
  return (
    <>
      <Container>
        <Typography
          paragraph
          sx={{
            fontSize: "45px",
            lineHeight: "45px",
            fontWeight: "700",
            textAline: "center",
            marginBottom: "40px",
            marginTop: "40px",
          }}
        >
          Exceptional
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardMedia
                sx={{ width: "100%", height: "70%" }}
                component="img"
                height="194"
                image={ExceptionalImg}
                alt="Paella dish"
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: "left", mt: 5 }}>
              <Typography
                paragraph
                sx={{
                  textAlign: "left",
                  fontSize: "45px",
                  lineHeight: "55px",
                  fontWeight: "300",
                }}
              >
                Exceptional Dental <br /> Care on Your Terms .
              </Typography>
              <Typography paragraph sx={{ lineHeight: "30px", my: 4 }}>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: "#11CFE3" }}>
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Exceptional;
