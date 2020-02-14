
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: 250,
      margin: 10,
      display:'flex'
    },
    media: {
      height: 240,
      display:'flex'
    },
  });


const ContentCard = (props) =>{
   const classes = useStyles();
    return(
        <Card className={classes.root}>
        <CardActionArea >
            <CardMedia className={classes.media} image={props.image} title={props.title}/>
            <Typography component="h6" variant="h6">
            {props.title}
            </Typography>
        </CardActionArea>
        </Card>
    )
}

export default ContentCard;