import React from "react";
import { Typography, Grid, Container, Button } from "@mui/material";
import ContactBgImg from "../../../images/appointment-bg.png";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const bgImg = {
  width: "100%",
  background: `url(${ContactBgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(45,58,74, .8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 200,
};
const Contact = () => {
  return (
    <>
      <Box style={bgImg} sx={{ flexGrow: 1, py: 5 }}>
        <Container>
          <Grid item xs={4} sm={4} md={4} sx={{ m: "auto" }}>
            <Typography variant="h5" component="div" sx={{ color: "#11CFE3" }}>
              Contact US
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{ my: 3, color: "white" }}
            >
              Always Contact With Us
            </Typography>
          </Grid>
          <form>
            <TextField
              sx={{ width: "50%", background: "white" }}
              id="outlined-size-small"
              defaultValue="Email Address*"
              size="small"
            />
            <TextField
              sx={{ width: "50%", m: 2, background: "white" }}
              id="outlined-size-small"
              defaultValue="Subject*"
              size="small"
            />
            <TextareaAutosize
              minRows={7}
              placeholder="Your Message*"
              style={{
                display: "block",
                width: "50%",
                margin: "auto",
                padding: "5px",
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ m: "10px auto", display: "block", padding: "10px 40px" }}
            >
              Send
            </Button>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
