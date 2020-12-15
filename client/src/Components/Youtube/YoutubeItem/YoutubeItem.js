import React from 'react';
import useStyles from './styles';



const YoutubeItem = ({video , handleVideoSelect}) => {
    const classes = useStyles();
    return (
        <div onClick={ () => handleVideoSelect(video)} className={classes.videoItem}>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default YoutubeItem;