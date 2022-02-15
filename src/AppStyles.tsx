import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  main_div: {
    width: "100%",
    height: "100vh",
    background: "#6983aa",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  center_div: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    height: "80vh",
    backgroundColor: "white",
    boxShadow: "5px 5px 25px -5px rgba(0, 0, 0, 0.5)",
    borderRadius: "25px",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      width: "0",
    },
    // "@media (max-width:768px)": {
    //   width: "55%",
    // },
    // "@media (max-width:468px)": {
    //   width: "80%",
    // },
    // "@media (min-width:1150px)": {
    //   width: "25%",
    // },
  },
});
