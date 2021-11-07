import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Peoples = (props) => {
  const { name, img, description, position } = props.people;
  return (
    <>
      <Grid item xs={4} sm={4} md={4} sx={{ my: 2 }}>
        <Card sx={{ minWidth: 275, boxShadow: 2, border: 0 }}>
          <CardContent>
            <Typography sx={{ my: 1.5 }} color="text.secondary">
              {description}
            </Typography>
          </CardContent>

          <Box
            sx={{
              flexGrow: 1,
              my: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              style={{
                width: "80px",
                height: "auto",
              }}
              component="img"
              image={img}
              alt="Paella dish"
            />
            <Box sx={{ ml: 2 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "#11CFE3" }}
              >
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {position}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default Peoples;
