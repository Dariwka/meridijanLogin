import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, TextField, Button } from "@material-ui/core";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

// const initialForm = {
//   id: 1,
//   date: "",
//   jobDescription: "",
//   timeFrom: "",
//   timeTo: "",
//   hours: "",
//   extraHours: "",
//   doubleExtraHours: "",
// };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type RowData = {
  message: string;
};

interface IState {
  rows: RowData[];
}

const TuntilistatForm = () => {
  const [state, setState] = useState<IState>({ rows: [] });
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  const addExtraRow = () => {
    setState({
      rows: [...state.rows, { message: "new element" }],
    });
    console.log("clicked add");
  };

  const { rows } = state;

  const deleteTableRow = () => {};

  const handleChange = () => {};

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
      jobDescription: data.get("jobDescription"),
      timeFrom: data.get("timeFrom"),
      timeTo: data.get("timeTo"),
      hours: data.get("hours"),
      extraHours: data.get("extraHours"),
      doubleExtraHours: data.get("doubleExtraHours"),
    });
  };
  let today = new Date();
  let dateM =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  console.log(dateM);
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 3, marginBottom: "16px" }}>
        <Typography variant="h2" style={{ textAlign: "center" }}>
          Add tuntilista
        </Typography>
        <Button onClick={showFormHandler} fullWidth variant="contained">
          ADD
        </Button>
        {showForm && (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Box
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
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
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>PVM</StyledTableCell>
                    <StyledTableCell align="right">Työtehtävä</StyledTableCell>
                    <StyledTableCell align="right">
                      Työaika alkaa
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Työaika loppu
                    </StyledTableCell>
                    <StyledTableCell align="right">Norm.</StyledTableCell>
                    <StyledTableCell align="right">50%</StyledTableCell>
                    <StyledTableCell align="right">100%</StyledTableCell>
                    <StyledTableCell align="right">
                      <AddCircleRoundedIcon onClick={addExtraRow} />
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((element, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>
                        <TextField
                          id="date"
                          name="date"
                          type="date"
                          variant="outlined"
                          fullWidth
                        />
                      </StyledTableCell>
                      <StyledTableCell>
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
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          id="timeFrom"
                          name="timeFrom"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="time"
                          variant="outlined"
                          fullWidth
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          id="timeTo"
                          name="timeTo"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="time"
                          variant="outlined"
                          fullWidth
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          id="hours"
                          name="hours"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="number"
                          variant="outlined"
                          fullWidth
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          id="extraHours"
                          name="extraHours"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="number"
                          variant="outlined"
                          fullWidth
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          id="doubleExtraHours"
                          name="doubleExtraHours"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="number"
                          variant="outlined"
                          fullWidth
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <RemoveCircleRoundedIcon onClick={deleteTableRow} />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button type="button" size="medium" variant="contained">
                CANCEL
              </Button>
              <Button type="submit" size="medium" variant="contained">
                SEND
              </Button>
            </div>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default TuntilistatForm;
