import React from "react";
import "./Header.scss";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const Header = () => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#1c1d24"
    },
    toolbar: {
      backgroundColor: "#1c1d24",
      width: "90%",
      alignSelf: "center"
    },
    content: {
      color: "#d9cccc"
    },
    buttonsContainer: {
      width:300,
      display: "flex",
      justifyContent: "flex-end"
    },
    homeButton: {
      color: "#d9cccc",
      textDecoration: "none"
    },
    appBar: {
      backgroundColor: "#1c1d24"
    },
    header: {
      display: "flex",
      justifyContent: "center",
      width: "100%"
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.header}>
            <Typography className={classes.content} variant="h6">
              A Rick and morty page
            </Typography>
            <div className={classes.buttonsContainer}>
            <NavLink to="/">
              <Button className={classes.homeButton}>Home</Button>
            </NavLink>
            <NavLink to="/">
              <Button className={classes.homeButton}>Episodes</Button>
            </NavLink>
          </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
