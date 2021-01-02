import React, { useState } from "react";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import twilightZone from "../../../images/oc-twilight-zone.jpg";
import rabbit from "../../../images/rabbit2.png";
import Welcome from "../../Layout/Welcome/Welcome";
import Login from "../../Auth/Login";
import Register from "../../Auth/Register";
import Alerts from "../Alert/Alert";
import Youtube from "../../Youtube/YoutubeList/YoutubeList";
import useStyles from "./styles";


const Landing2 = () => {
  const classes = useStyles();
  const [registerOrLogin, setRegisterOrLogin] = useState(false);

  const handleOnClick = () => {
    setRegisterOrLogin(!registerOrLogin);
  };

  return (
    <div className={classes.root}>
     
      <Grid  container style={{ minHeight: "100vh" }}>
        {/* <Grid item xs={12} sm={6}>
       

        <img
            src={twilightZone}
            style={{ width: '100%', height: '100%', objectFit: 'cover'}}
            alt="twilight zone"
          />

        { registerOrLogin === true  ? <img
            src={twilightZone}
            style={{ width: '100%', height: '100%', objectFit: 'cover'}}
            alt="twilight zone"
          /> : <Welcome/>}
          
          
        </Grid> */}

        <Grid
          container
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <Alerts />

          <Grid container justify="center">
            <div style={{ display: "block" }}>
              <h1 style={{ fontFamily: "TwyliteZone", fontSize: "50px" }}>
                The Echo Chamber
              </h1>
              
                <img
                  src={rabbit}
                  width={200}
                  alt="rabbit"
                  style={{ marginLeft: 75}}
                />
              
            </div>

            {registerOrLogin === true ? <Login /> : <Register />}

            <Button onClick={handleOnClick}>
              {registerOrLogin === true
                ? "Register an account"
                : "Already have account"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing2;
