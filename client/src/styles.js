import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 0,
    height: "100vh",
    marginBottom: 20,
  },
  heading: {
    fontFamily: "Echo",
  },
  image: {
    marginLeft: "15px",
    height: "150px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
