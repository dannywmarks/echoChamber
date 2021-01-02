import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  // if (auth) {
  //   return <Redirect to='/' />
  // }

  const authLinks = (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick=""
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick=""
        color="inherit"
      >
        <YouTubeIcon />
      </IconButton>

      <Link style={{ textDecoration: "none", outline: "none" }} to="/">
        <Button onClick={() => dispatch(logout())} color="inherit">
          Logout
        </Button>
      </Link>
      <Link style={{ textDecoration: "none", outline: "none" }} to="/chambers">
        <Button color="inherit">Chambers</Button>
      </Link>
    </>
  );

  const guestLinks = (
    <>
      <Link style={{ textDecoration: "none", outline: "none" }} to="/chambers">
        <Button color="inherit">Chambers</Button>
      </Link>
      <Link style={{ textDecoration: "none", outline: "none" }} to="/">
        <Button color="inherit">Login</Button>
      </Link>
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            "((( )))"
          </Typography>

          {!loading && <>{auth ? authLinks : guestLinks}</>}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
