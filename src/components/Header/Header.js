import React from "react";
import "./Header.scss";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
    toolbar:{
        backgroundColor:'#1a0101'
    },
    content:{
      color:'#d9cccc'
    }
});

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.content} variant='h6'>
                Wubbalubdubduuuub, a Rick and morty page
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
