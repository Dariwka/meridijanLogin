import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const TuntilistatForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ mt: 3, marginBottom: "16px" }}>
        <Typography variant="h2" style={{ textAlign: "center" }}>
          Add tuntilista
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Box sx={{ mt: 1, textAlign: "right" }}>
            <TextField
              margin="normal"
              style={{ width: "450px", margin: "5px" }}
              type="text"
              label="Työntekijä(nimi ja sukunimi)"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="normal"
              style={{ width: "450px", margin: "5px" }}
              type="text"
              label="Ajalta"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="normal"
              style={{ width: "450px", margin: "5px" }}
              type="text"
              label="Tilaaja"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="normal"
              style={{ width: "450px", margin: "5px" }}
              type="text"
              label="Työmaa"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="normal"
              style={{ width: "450px", margin: "5px" }}
              type="text"
              label="Työnumero"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: 1, textAlign: "left" }}>
            <TextField
              margin="normal"
              style={{ margin: "5px" }}
              type="date"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="normal"
              style={{ margin: "5px" }}
              type="time"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="normal"
              style={{ margin: "5px" }}
              type="time"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="normal"
              style={{ margin: "5px" }}
              type="text"
              label="Työtehtävä"
              variant="outlined"
              fullWidth
            />
            <AddCircleRoundedIcon onClick={() => console.log("clicked")} />
          </Box>
          <Button type="submit" fullWidth variant="contained">
            SUBMIT
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TuntilistatForm;
