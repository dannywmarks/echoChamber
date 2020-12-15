import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Container, Typography, Button, Grow} from '@material-ui/core'
import YoutubeItem from '../YoutubeItem/YoutubeItem'
import useStyles from './styles';

const YoutubeList = ({handleVideoSelect}) => {
  const classes = useStyles();
  const videos = useSelector((state) => state.youtube.videos)
  const renderedVideos =  videos.map((video) => {
    return <YoutubeItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    // console.log(video.id);
});

return <Grid container className={classes.mainContainer}>
  <div className={classes.div}>{renderedVideos}</div>
  </Grid>;
}

export default YoutubeList
