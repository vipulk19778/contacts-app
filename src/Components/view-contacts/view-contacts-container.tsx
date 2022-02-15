import { ViewContactsRenderer } from "./view-contacts-renderer";
import { AuthContext } from "../../Context/AuthContext";

import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const ViewContactsComponent = () => {
  const { listItemData } = React.useContext(AuthContext);
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
  const rows = {
    name: listItemData.name,
    email: listItemData.email,
    phone: listItemData.phone,
    note: listItemData.note,
  };

  const store = {
    StyledTableCell: StyledTableCell,
    StyledTableRow: StyledTableRow,
    rows: rows,
  };

  return <ViewContactsRenderer store={store} />;
};
