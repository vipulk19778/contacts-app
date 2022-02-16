import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  contactListItemContainer: {
    width: "50%",
    float: "left",
    background: "white !important",
    "@media screen and (max-width:768px)": {
      width: "100%",
    },
  },
  h1: {
    color: "white",
    backgroundColor: "#8566aa",
    padding: "10px 0 10px 0",
    marginTop: "0",
    marginBottom: "10px",
  },

  newContactForm: {
    fontSize: "12px",
    cursor: "pointer",
    boxShadow: " 5px 5px 15px -5px rgba(0, 0, 0, 0.3)",
    textDecoration: "none",
    "&:hover": {
      background: "#20bf6b",
    },
    "@media (max-width:768px)": {
      fontSize: "14px",
    },
  },
  todoStyle: {
    "&:nth-child(odd)": {
      background: "#f5f5f5",
    },
  },
  tableContainer: {
    position: "relative",
    width: "90%",
    margin: "10px auto",
    "@media (max-width:768px)": {
      margin: "20px auto",
    },
  },
  li: {
    paddingLeft: "0px",
    listStyle: "none",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: "bold",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    color: "#8566aa",
    cursor: "pointer",
    "@media (max-width:768px)": {
      fontSize: "10px",
    },
  },

  listItemContainer: {},

  iconsContainer: {
    position: "absolute",
    right: "0",
    marginTop: "-32px",
  },

  delete: {
    width: "20px",
    height: "20px",
    margin: "0 10px 0 20px",
    color: "#8566aa",
    cursor: "pointer",
    "&:hover": { color: "crimson" },
  },
  edit: {
    width: "20px",
    height: "20px",
    margin: "0 15px 0 0",
    color: "#8566aa",
    cursor: "pointer",
    "&:hover": { color: "#20bf6b" },
  },
});
