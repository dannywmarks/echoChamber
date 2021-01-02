import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import moment from "moment";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { deleteChamber, likeChamber } from "../../../actions/chambers";

const Chamber = ({ chamber, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const toChamber = {
    pathname: `/chambers/${chamber._id}`,
    param1: 'Par1',
    chamber_id: chamber._id
  }
 
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={chamber.selectedFile}
        title={chamber.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{chamber.creator}</Typography>
        <Typography variant="body2">
          {moment(chamber.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(chamber._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {chamber.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h4" gutterBottom>
        {chamber.title}
      </Typography>
      <CardContent>
        <Typography
          className={classes.body2}
          color="textSecondary"
          variant="h6"
          gutterBottom
        >
          {chamber.notes}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(likeChamber(chamber._id));
          }}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;Like&nbsp;
          {chamber.likeCount}
        </Button>
        <Link to={toChamber} >Echo</Link>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deleteChamber(chamber._id));
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      
      </CardActions>
    </Card>
  );
};

export default Chamber;
