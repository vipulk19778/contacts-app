import React from "react";
import { ContactsListRenderer } from "./contacts-list-renderer";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useStyles } from "./contacts-list-styles";

export const ContactsListComponent = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const {
    listItem,
    setListItem,
    userData,
    setUserData,
    setToggleSubmit,
    setInputEditButtonId,
    setListItemData,
  } = React.useContext(AuthContext);

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

  const handleEditButton = (id: number) => {
    const editItem: any = listItem.find((prevData: {}, index: number) => {
      return id === index;
    });
    setUserData(editItem);
    setInputEditButtonId(id);
    setToggleSubmit(false);
  };

  const handleDeleteButton = (id: number) => {
    setListItem(
      listItem.filter((prevData: {}, index: number) => {
        return id !== index;
      })
    );
    if (userData.name || userData.email || userData.phone || userData.note)
      setUserData({
        name: "",
        email: "",
        phone: "",
        note: "",
      });
    setToggleSubmit(true);
  };

  const onNewContactForm = () => {
    navigate("/");
    if (userData.name || userData.email || userData.phone || userData.note)
      setUserData({
        name: "",
        email: "",
        phone: "",
        note: "",
      });
    setToggleSubmit(true);
  };

  const onListItemClick = (item: any, index: any) => {
    setListItemData(item);
    navigate("/viewcontact");
  };

  const states = {
    listItem: listItem,
    handleEditButton: handleEditButton,
    handleDeleteButton: handleDeleteButton,
    onListItemClick: onListItemClick,
    onNewContactForm: onNewContactForm,
    StyledTableCell: StyledTableCell,
    StyledTableRow: StyledTableRow,
    classes: classes,
    navigate: navigate,
  };
  return <ContactsListRenderer states={states} />;
};
