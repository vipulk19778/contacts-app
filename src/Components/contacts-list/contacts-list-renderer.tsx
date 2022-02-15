import React from "react";
import { useStyles } from "./contacts-list-styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import { Button, ListItem } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export const ContactsListRenderer = ({ states }: any) => {
  const {
    listItem,
    handleDeleteButton,
    handleEditButton,
    onListItemClick,
    onNewContactForm,
  } = states;

  const classes = useStyles();

  const navigate = useNavigate();

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

      {listItem.map((item: any, index: any) => (
        <div className={classes.todoStyle} key={index}>
          <div className={classes.listItemContainer}>
            <ListItem
              className={classes.li}
              id={index}
              onClick={() => {
                onListItemClick(item);
              }}
            >
              <PersonIcon />
              {item.name}|{item.email}
            </ListItem>
          </div>

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
        </div>
      ))}
    </div>
  );
};
