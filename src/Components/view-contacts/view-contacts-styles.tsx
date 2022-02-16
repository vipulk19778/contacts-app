import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  h1: {
    color: "white",
    backgroundColor: "#8566aa",
    padding: "10px 0 10px 0",
    marginTop: "0",
    marginBottom: "10px",
  },
  viewContactContainerMainDiv: {
    width: "50%",
    float: "left",
    "@media screen and (max-width:768px)": {
      width: "100%",
    },
  },
  viewContactContainerCenterDiv: {
    position: "relative",
    top: "12%",
    "@media screen and (max-width:768px)": {
      top: "0",
      margin: "5% 0",
    },
  },
  tableContainer: {
    width: "90%",
    margin: "0 auto",
  },
});
