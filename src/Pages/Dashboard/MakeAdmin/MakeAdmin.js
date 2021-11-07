import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://frozen-eyrie-76960.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail("");
          console.log(data);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Admin board</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          required
          id="standard-basic"
          label="your Email"
          variant="standard"
          type="email"
          name="email"
          onBlur={handleOnBlur}
          sx={{ width: "25%", mt: "5%" }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            margin: "20px auto",
            display: "block",
            padding: "10px 40px",
            width: "25%",
            backgroundColor: "#11CFE3",
          }}
        >
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success"> Made Admin Success!</Alert>}
    </div>
  );
};

export default MakeAdmin;
