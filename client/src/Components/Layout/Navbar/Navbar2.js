import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Redirect, withRouter, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import YouTubeIcon from "@material-ui/icons/YouTube";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/auth";
import { MenuItem } from "@material-ui/core";

import setAuthToken from "../../../utils/setAuthToken";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  // if (auth) {
  //   return <Redirect to='/' />
  // }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const authLinks = (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        className={classes.menuButton}
        color="inherit"
        onClick={() => handleMenuClick("/profile")}
      >
        <AccountCircle />
      </IconButton>
      <IconButton
        aria-label="account of current user"
        className={classes.menuButton}
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick=""
        color="inherit"
      >
        <YouTubeIcon />
      </IconButton>

      <IconButton
        edge="start"
        color="inherit"
        arial-label="menu"
        className={classes.menuButton}
        onClick={() => handleMenuClick('/about')}
      >
        <Typography>About</Typography>
      </IconButton>
      <IconButton
        edge="start"
        color="inherit"
        arial-label="menu"
        className={classes.menuButton}
      >
        <Typography>Chambers</Typography>
      </IconButton>
      <IconButton
        edge="start"
        color="inherit"
        arial-label="menu"
        className={classes.menuButton}
        onClick={() => dispatch(logout())}
      >
        <Typography>Logout</Typography>
      </IconButton>
    </>
  );

  const guestLinks = (
    <>
      <IconButton
        edge="start"
        color="inherit"
        arial-label="menu"
        className={classes.menuButton}
        onClick={() => handleMenuClick("/chambers")}
      >
        <Typography>Chambers</Typography>
      </IconButton>
      <IconButton
        edge="start"
        color="inherit"
        arial-label="menu"
        className={classes.menuButton}
        onClick={() => handleMenuClick("/")}
      >
        <Typography>Login</Typography>
      </IconButton>
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <IconButton
              className={classes.title}
              onClick={() => handleMenuClick("/")}
            >
              The Echo Chamber
            </IconButton>
          </Typography>

          <div>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/chambers")}>
                    Chambers
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/youtube")}>
                    Search
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <> {!loading && <>{auth ? authLinks : guestLinks}</>}</>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
