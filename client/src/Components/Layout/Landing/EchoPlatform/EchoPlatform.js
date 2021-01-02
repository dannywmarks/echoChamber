import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, AppBar, Typography } from "@material-ui/core";
import Echos from "../../../Echos/Echos";
import Form from "../../../Forms/EchoForm";
import { useDispatch } from "react-redux";
import { getEchosId } from "../../../../actions/echos";
import useStyles from "./styles";

const EchoPlatform = ({match}) => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  const chamber_id = match.params.id

  useEffect(() => {
    dispatch(getEchosId(chamber_id));
  }, [currentId, dispatch]);


  return (
    <Grow in>
      <Container>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Echos
          </Typography>
        </AppBar>
        <Grid
          container
          className={classes.mainContainer}
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Echos setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} chamber_id={chamber_id} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default EchoPlatform;