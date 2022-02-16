import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import { Button, ListItem } from "@material-ui/core";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";

export const ContactsListRenderer = ({ states }: any) => {
  const {
    listItem,
    handleDeleteButton,
    handleEditButton,
    onListItemClick,
    onNewContactForm,
    StyledTableCell,
    StyledTableRow,
    classes,
    navigate,
  } = states;

  return (
    <div className={classes.contactListItemContainer}>
      <h1 className={classes.h1}>Contacts List</h1>
      <Button
        className={classes.newContactForm}
        variant="contained"
        size="small"
        color="primary"
        style={{ margin: "10px 0" }}
        onClick={onNewContactForm}
      >
        New Contact Form
      </Button>

      <div className={classes.tableContainer}>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">List Items</StyledTableCell>
              </TableRow>
            </TableHead>
            {listItem.map((item: any, index: any) => (
              <TableBody key={index} className={classes.todoStyle}>
                <StyledTableRow>
                  <StyledTableCell
                    align="center"
                    className={classes.listItemContainer}
                  >
                    <ListItem
                      className={classes.li}
                      id={index}
                      onClick={() => {
                        onListItemClick(item, index);
                      }}
                    >
                      <PersonIcon />
                      {item.name}|{item.email}
                    </ListItem>
                    <div className={classes.iconsContainer}>
                      <DeleteIcon
                        className={classes.delete}
                        aria-hidden="true"
                        id={index}
                        onClick={() => {
                          handleDeleteButton(index);
                        }}
                      />
                      <EditIcon
                        className={classes.edit}
                        aria-hidden="true"
                        onClick={() => {
                          navigate("/");
                          handleEditButton(index);
                        }}
                      />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
