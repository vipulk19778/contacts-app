import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useStyles } from "./view-contacts-styles";
import PersonIcon from "@mui/icons-material/Person";

export const ViewContactsRenderer = ({ store }: any) => {
  const { StyledTableCell, StyledTableRow, rows } = store;

  const classes = useStyles();
  return (
    <div className={classes.viewContactContainerMainDiv}>
      <h1 className={classes.h1}>Details of User</h1>
      <div className={classes.viewContactContainerCenterDiv}>
        <div className={classes.tableContainer}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">
                    <PersonIcon />
                  </StyledTableCell>
                  <StyledTableCell align="center">Details</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">{rows.name}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">{rows.email}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Phone</StyledTableCell>
                  <StyledTableCell align="center">{rows.phone}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Note</StyledTableCell>
                  <StyledTableCell align="center">{rows.note}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
