import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const TuntilistatForm = () => {
  // const [rows, setRows] = useState([{}]);

  const addExtraRow = () => {};

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      worker: data.get("worker"),
      period: data.get("period"),
      company: data.get("companyName"),
      address: data.get("address"),
      number: data.get("addressNumber"),
      date: data.get("date"),
      timeFrom: data.get("timeFrom"),
      timeTo: data.get("timeTo"),
      jobDescription: data.get("jobDescription"),
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
              id="worker"
              name="worker"
              margin="normal"
              style={{ width: "450px", margin: "5px" }}
              type="text"
              label="Työntekijä(nimi ja sukunimi)"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="period"
              name="period"
              margin="normal"
              style={{ width: "450px", margin: "5px" }}
              type="text"
              label="Ajalta"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="companyName"
              name="company"
              margin="normal"
              style={{ width: "450px", margin: "5px" }}
              type="text"
              label="Tilaaja"
              variant="outlined"
              fullWidth
            />
            <TextField
              name="address"
              id="address"
              margin="normal"
              style={{ width: "450px", margin: "5px" }}
              type="text"
              label="Työmaa"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="addressNumber"
              name="number"
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
              id="date"
              name="date"
              margin="normal"
              style={{ margin: "5px" }}
              type="date"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="timeFrom"
              name="timeFrom"
              margin="normal"
              style={{ margin: "5px" }}
              type="time"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="timeTo"
              name="timeTo"
              margin="normal"
              style={{ margin: "5px" }}
              type="time"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="jobDescription"
              name="jobDescription"
              margin="normal"
              style={{ margin: "5px" }}
              type="text"
              label="Työtehtävä"
              variant="outlined"
              fullWidth
            />
            <AddCircleRoundedIcon onClick={addExtraRow} />
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
