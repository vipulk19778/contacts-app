import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  contactFormContainer: {
    width: "50%",
    float: "left",
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
  inputField: {
    marginTop: "15px",
    marginBottom: "10px",
  },
  submit: {
    fontSize: "12px",
    cursor: "pointer",
    boxShadow: " 5px 5px 15px -5px rgba(0, 0, 0, 0.3)",
    "&:hover": {
      background: "#20bf6b",
    },
    "@media (max-width:768px)": {
      fontSize: "14px",
    },
  },
});