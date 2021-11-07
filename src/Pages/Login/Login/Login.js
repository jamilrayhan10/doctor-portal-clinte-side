import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import LoginImg from "../../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const loginValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const loginNewData = { ...loginData };
    loginNewData[field] = value;
    setLoginData(loginNewData);
  };
  const submitLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleLoginWithGoogle = () => {
    signInWithGoogle(location, history);
  };
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <form onSubmit={submitLogin}>
              <Typography variant="h4" component="div" sx={{ mt: "20%" }}>
                Login
              </Typography>
              <TextField
                required
                id="standard-basic"
                label="your Email"
                variant="standard"
                type="email"
                name="email"
                onBlur={loginValue}
                sx={{ width: "75%", mt: "10%" }}
              />
              <TextField
                required
                id="standard-basic"
                label="your password"
                variant="standard"
                type="password"
                name="password"
                onBlur={loginValue}
                sx={{ width: "75%", my: 2 }}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  margin: "20px auto",
                  display: "block",
                  padding: "10px 40px",
                  width: "75%",
                  backgroundColor: "#11CFE3",
                }}
              >
                Login
              </Button>

              <NavLink to="/register">
                <Button variant="text">
                  are you new user? please register
                </Button>
              </NavLink>
              {isLoading && (
                <CircularProgress
                  sx={{ display: "block", textAline: "center", margin: "auto" }}
                />
              )}
              {user?.email && <Alert severity="success"> login success!</Alert>}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <p>--------------------------------------------------------</p>
            <Button
              onClick={handleLoginWithGoogle}
              type="submit"
              variant="contained"
              sx={{
                margin: "0px auto",
                display: "block",
                padding: "10px 40px",
                width: "40%",
                // backgroundColor: "#11CFE3",
              }}
            >
              Google Sign In
            </Button>
            <p>--------------------------------------------------------</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "100vh" }}
              image={LoginImg}
              alt="Paella dish"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
