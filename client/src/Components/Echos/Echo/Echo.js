import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyles from './styles';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deleteEcho } from '../../../actions/echos'

const Echo = ({ echo, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={echo.selectedFile} title={echo.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{echo.title}</Typography>
        <Typography variant="body2">{moment(echo.createdAt).fromNow()}</Typography> 
      </div>
      <div className={classes.overlay2}>
        <Button 
          style={{color: 'white'}} 
          size='small' 
          onClick={() => setCurrentId(echo._id)}> 
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">{echo.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>{echo.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
        <ThumbUpAltIcon fontSize="small" />Like 
          {` `}{echo.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {dispatch(deleteEcho(echo._id))}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
      
    </Card>
  )
}

export default Echo
