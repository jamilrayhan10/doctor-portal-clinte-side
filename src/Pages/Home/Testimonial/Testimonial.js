import { Container, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import People1 from "../../../images/people-1.png";
import People2 from "../../../images/people-2.png";
import People3 from "../../../images/people-3.png";
import Peoples from "../Peoples/Peoples";
const testimonial = [
  {
    description:
      "  adipisicing elit. Sapiente molestiae asperiores veritatis atque rerum neque, error iste culpa optio ex facere dicta molestias quo. Iste odio quaerat quos voluptas eius?",
    img: People1,
    name: "jahid hasan",
    position: "web developer",
  },
  {
    description:
      " adipisicing elit. Sapiente molestiae asperiores veritatis atque rerum neque, error iste culpa optio ex facere dicta molestias quo. Iste odio quaerat quos voluptas eius?",
    img: People2,
    name: "mita hasan",
    position: "web developer",
  },
  {
    description:
      "  adipisicing elit. Sapiente molestiae asperiores veritatis atque rerum neque, error iste culpa optio ex facere dicta molestias quo. Iste odio quaerat quos voluptas eius?",
    img: People3,
    name: "abila hasan",
    position: "sbila developer",
  },
];

const Testimonial = () => {
  return (
    <div>
      <Container sx={{ padding: "30px 0", my: 4 }}>
        <Typography
          paragraph
          sx={{
            textAlign: "left",
            fontSize: "25px",
            fontWeight: "300",
          }}
        >
          Testimonial
        </Typography>
        <Typography
          paragraph
          sx={{
            textAlign: "left",
            fontSize: "45px",
            fontWeight: "700",
            lineHeight: "50px",
            margin: 0,
            padding: 0,
          }}
        >
          What's Our Patients <br /> Says.
        </Typography>
        <Box sx={{ flexGrow: 1, my: 3 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {testimonial.map((people) => (
              <Peoples key={people.name} people={people}></Peoples>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Testimonial;
