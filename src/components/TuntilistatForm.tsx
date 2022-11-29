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
  id: number;
  date: string;
  jobDescription: string;
  timeFrom: string;
  timeTo: string;
  hours: string;
  extraHours: string;
  doubleExtraHours: string;
};

interface IState {
  rows: RowData[];
}

const TuntilistatForm = () => {
  const [state, setState] = useState<IState>({ rows: [] });
  const [showForm, setShowForm] = useState(false);

  console.log("state", state);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  const addExtraRow = () => {
    setState({
      rows: [
        ...state.rows,
        {
          id: rows.length + 1,
          date: "",
          jobDescription: "",
          timeFrom: "",
          timeTo: "",
          hours: "",
          extraHours: "",
          doubleExtraHours: "",
        },
      ],
    });
    console.log("clicked add");
  };

  const { rows } = state;

  const deleteTableRow = (id: any) => {
    setState({
      rows: [...state.rows.filter((el) => el.id !== id)],
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: any
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    const list = [...state.rows];
    list[index][name] = value;
    setState(list);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      worker: data.get("worker"),
      period: data.get("period"),
      company: data.get("companyName"),
      address: data.get("address"),
      number: data.get("addressNumber"),
      // date: data.get("date"),
      // jobDescription: data.get("jobDescription"),
      // timeFrom: data.get("timeFrom"),
      // timeTo: data.get("timeTo"),
      // hours: data.get("hours"),
      // extraHours: data.get("extraHours"),
      // doubleExtraHours: data.get("doubleExtraHours"),
      rows: state,
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
                  {rows.map((element, i) => (
                    <StyledTableRow key={element.id}>
                      <StyledTableCell>
                        <TextField
                          name="date"
                          type="date"
                          variant="outlined"
                          fullWidth
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          name="jobDescription"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="text"
                          label="Työtehtävä"
                          variant="outlined"
                          fullWidth
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          name="timeFrom"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="time"
                          variant="outlined"
                          fullWidth
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          name="timeTo"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="time"
                          variant="outlined"
                          fullWidth
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          name="hours"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="number"
                          variant="outlined"
                          fullWidth
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          name="extraHours"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="number"
                          variant="outlined"
                          fullWidth
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField
                          name="doubleExtraHours"
                          margin="normal"
                          style={{ margin: "5px" }}
                          type="number"
                          variant="outlined"
                          fullWidth
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <RemoveCircleRoundedIcon
                          onClick={() => deleteTableRow(element.id)}
                        />
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
