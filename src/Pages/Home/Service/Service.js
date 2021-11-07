import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = (props) => {
  const { name, img, description } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, boxShadow: 0, border: 0 }}>
        <CardMedia
          style={{
            width: "auto",
            height: "auto",
            textAlign: "center",
            margin: "10px auto",
          }}
          component="img"
          image={img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
