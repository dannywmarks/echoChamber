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
import { useDispatch } from "react-redux";
import { deleteEcho } from "../../../actions/echos";

// title: "",
// videoLink: "",
// author:"",
// bookLink:"",
// webLink:"",
// notes: "",

const Echo = ({ echo, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
 
  return (
    <Card className={classes.card}>
      <CardMedia
        component="iframe"
        height="200"
        image={`https://www.youtube.com/embed/${echo.videoLink}`}
        title={echo.title}
        controls
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{echo.creator}</Typography>
        <Typography variant="body2">
          {moment(echo.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(echo._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <Typography className={classes.title} variant="h4" gutterBottom>
        {echo.title}
      </Typography>
      <CardContent>
        <Typography
          className={classes.body2}
          color="textSecondary"
          variant="h6"
          gutterBottom
        >
          {echo.notes}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;Like&nbsp;
          {echo.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deleteEcho(echo._id));
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Echo;
