import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  viewContactContainer: {
    width: "50%",
    float: "left",
    "@media screen and (max-width:768px)": {
      width: "100%",
    },
  },
  tableContainer: {
    width: "90%",
    margin: "0 auto",
  },

  h1: {
    color: "white",
    backgroundColor: "#8566aa",
    padding: "10px 0 10px 0",
    marginTop: "0",
    marginBottom: "10px",
  },
});
