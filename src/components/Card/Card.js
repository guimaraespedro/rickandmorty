import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minWidth: 200,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    display: "flex",
    flexShrink: 1,
    backgroundColor:'#1c1d24'
  },
  media: {
    height: 300,
    display: "flex",
    backgroundSize: "unset"
  },
  name: {
    display: "flex",
    justifyContent: "center",
    color:'#d9cccc'
  },
  about: {
    margin: 5,
    justifyContent:'space-between',
    width:'100%',
    position: "relative",
    display: "flex",
    borderBottom:'1px solid #f0d1d9',
    color:'#700925'
  },
  contentContainer: {
    position: "relative",
    display: "inline-block",
    width: "100%"
  },
  aboutTitle:{
    color:'#d9cccc'
  }
});

const ContentCard = props => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.info.image}
          title={props.info.name}
        />
        <CardContent className={classes.contentContainer}>
          <Typography className={classes.name} component="h6" variant="h6">
            {props.info.name}
          </Typography>
          <Typography className={classes.about}>
            <span className={classes.aboutTitle}>Status</span> {props.info.status}
          </Typography>
          <Typography className={classes.about}>
            <span className={classes.aboutTitle}>Species</span>{props.info.species}
          </Typography>
          <Typography className={classes.about}>
            <span className={classes.aboutTitle}>Gender</span>{props.info.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ContentCard;
