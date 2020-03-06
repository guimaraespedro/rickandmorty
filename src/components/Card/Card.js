import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minWidth: 200,
    height: 580,
    marginTop: 10,
    marginBottom: 10,
    flexShrink: 1,
    backgroundColor: "#1c1d24",
    "&:hover": {
      scale: 2
    }
  },
  media: {
    height: 300,
    width: 300,
    display: "flex",
    backgroundSize: "unset",
    backgroundColor: "gray"
  },
  name: {
    textAlign: "center",
    color: "#d9cccc"
  },
  about: {
    margin: 5,
    justifyContent: "space-between",
    width: "100%",
    display: "flex",
    borderBottom: "1px solid rgb(68, 68, 68);",
    color: "#ff3b21",
    height: 39
  },
  contentContainer: {
    position: "relative",
    display: "inline-block",
    width: "100%"
  },
  aboutTitle: {
    width: 60,
    color: "#d9cccc",
    marginRight: 4,
    alignSelf: "center"
  },
  skeleton: {
    opacity: 0.2,
    background: "#26262e"
  },
  aboutInfo: {
    textAlign: "end",
    alignSelf: "center"
  },
  teste: {
    color: "white"
  }
});

const ContentCard = props => {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {loading ? (
        <Skeleton
          animation="pulse"
          variant="rect"
          width="300px"
          height="300px"
          className={classes.skeleton}
        />
      ) : (
        <CardMedia
          className={classes.media}
          image={props.info.image}
          title={props.info.name}
        />
      )}
      {loading ? (
        <>
          <Skeleton
            className={classes.skeleton}
            animation="wave"
            height={60}
            width="100%"
          />
          <Skeleton
            className={classes.skeleton}
            animation="pulse"
            height={40}
            width="100%"
          />
          <Skeleton
            className={classes.skeleton}
            animation="pulse"
            height={40}
            width="100%"
          />
          <Skeleton
            className={classes.skeleton}
            animation="pulse"
            height={40}
            width="100%"
          />
          <Skeleton
            className={classes.skeleton}
            animation="pulse"
            height={40}
            width="100%"
          />
          <Skeleton
            className={classes.skeleton}
            animation="pulse"
            height={40}
            width="100%"
          />
        </>
      ) : (
        <CardContent className={classes.contentContainer}>
          <Typography className={classes.name} component="h6" variant="h6">
            {props.info.name}
          </Typography>
          <Typography className={classes.about}>
            <span className={classes.aboutTitle}>Status</span>{" "}
            <span className={classes.aboutInfo}>{props.info.status}</span>
          </Typography>
          <Typography className={classes.about}>
            <span className={classes.aboutTitle}>Species</span>
            <span className={classes.aboutInfo}>{props.info.species}</span>
          </Typography>
          <Typography className={classes.about}>
            <span className={classes.aboutTitle}>Gender</span>
            <span className={classes.aboutInfo}>{props.info.gender}</span>
          </Typography>
          <Typography className={classes.about}>
            <span className={classes.aboutTitle}>Origin</span>
            <span className={classes.aboutInfo}>{props.info.origin.name}</span>
          </Typography>
          <Typography className={classes.about}>
            <span className={classes.aboutTitle}>Last Location</span>
            <span className={classes.aboutInfo}>
              {props.info.location.name}
            </span>
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default ContentCard;
