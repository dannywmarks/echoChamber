import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Echo from "./Echo/Echo";
import useStyles from "./styles";

const Echos = ({ setCurrentId }) => {
  const echos = useSelector((state) => state.echos);
  const classes = useStyles();
  return !echos.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {echos.map((echo) => (
        <Grid key={echo._id} item xs={12} sm={6}>
          <Echo echo={echo} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Echos;
