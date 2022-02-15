import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  contactListItemContainer: {
    width: "50%",
    float: "left",
    "@media screen and (max-width:768px)": {
      width: "100%",
    },
  },
  navLink: {
    textDecoration: "none",
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
  listItems: {
    marginTop: "30px",
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
  },
  listItemContainer: {},
  iconsContainer: {
    position: "absolute",
    right: "0px",
    "@media (max-width:768px)": {
      marginRight: "3px",
    },
  },
  h1: {
    color: "white",
    backgroundColor: "#8566aa",
    padding: "10px 0 10px 0",
    marginTop: "0",
    marginBottom: "10px",
  },
  todoStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    position: "relative",
  },
  delete: {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px 0 20px",
    color: "#8566aa",
    cursor: "pointer",
    "&:hover": { color: "crimson" },
  },
  edit: {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 15px 0 0",
    color: "#8566aa",
    cursor: "pointer",
    "&:hover": { color: "#20bf6b" },
  },
});
