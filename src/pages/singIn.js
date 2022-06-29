import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Container, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import SendIcon from "@mui/icons-material/Send";

import NvBar from "../components/NvBar";

export default function SingIn() {
  let navigate = useNavigate();
  const [nick, setNick] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [registerError, setRegisterError] = React.useState(false);

  const handleSend = () => {
    setLoading(true);
    if (confirm !== password) {
      setConfirm("");
      setRegisterError(true);
      setLoading(false);
      return;
    }
    if (!name || !nick || !password) {
      setRegisterError(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <NvBar title={"SingUP"} pathName={"Feed"} />
      <Container>
        <Box sx={form}>
          <Typography sx={{ color: "#3498DB" }} variant="h4" display="block">
            Sing up
          </Typography>
          <TextField
            error={registerError && nick === ""}
            id="outlined-error"
            label="Nick"
            sx={{ marginBottom: 1 }}
            value={nick}
            onChange={(event) => setNick(event.target.value)}
          />
          <TextField
            error={registerError && name === ""}
            id="outlined-error"
            label="Name"
            sx={{ marginBottom: 1 }}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            error={registerError && password === ""}
            id="outlined-password-input"
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            sx={{ marginBottom: 1 }}
          />
          <TextField
            error={registerError && confirm === ""}
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
            sx={{ marginBottom: 1 }}
          />
          <LoadingButton
            size="large"
            onClick={handleSend}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="outlined"
            color="primary"
          >
            Send
          </LoadingButton>
        </Box>
      </Container>
    </>
  );
}

const form = {
  padding: 5,
  marginTop: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: " center",
  border: "1px dashed #3498DB",
};
