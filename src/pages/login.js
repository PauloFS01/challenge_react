import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Container, TextField, Typography, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import SendIcon from "@mui/icons-material/Send";

import NvBar from "../components/NvBar";

const AUTH = {
  username: "John",
  password: "1234",
};

export default function Login() {
  let navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authError, setAuthError] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  function authenticate() {
    const authUser = !username || username !== AUTH.username;
    const authPass = !password || password !== AUTH.password;

    if (authUser || authPass) {
      setAuthError(true);
      return false;
    } else {
      setAuthError(false);
      navigate("/");
    }
    return true;
  }

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      authenticate();
    }, 2000);
  }

  return (
    <>
      <NvBar title={"Login"} path={"/"} pathName={"Feed"} />
      <Container>
        <Box sx={form}>
          <Typography sx={{ color: "#3498DB" }} variant="h4" display="block">
            Login
          </Typography>
          <TextField
            error={authError}
            id="outlined-error"
            label="Login"
            sx={{ marginBottom: 1 }}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            error={authError}
            id="outlined-password-input"
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            sx={{ marginBottom: 1 }}
          />
          <LoadingButton
            size="large"
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="outlined"
            color="primary"
          >
            Send
          </LoadingButton>
        </Box>
        <Box sx={boxStyle}>
          <Typography sx={{ color: "#3498DB" }}>OR</Typography>
          <Link
            component="button"
            variant="h6"
            onClick={() => {
              navigate("/singIn", { replace: true });
            }}
          >
            Singup
          </Link>
        </Box>
      </Container>
    </>
  );
}

const form = {
  marginTop: 10,
  height: 300,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: " center",
  border: "1px dashed #3498DB",
};

const boxStyle = {
  marginTop: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: " center",
};
