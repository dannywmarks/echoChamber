import React, { useState } from 'react'
import { Grid, Container, Typography, Button, Grow} from '@material-ui/core'
import SearchBar from "material-ui-search-bar";
import youTube from '../../../api/youtube'
import { useDispatch, useSelector } from 'react-redux';
import { loadVideos } from '../../../actions/youtube'

const YoutubeList = () => {
  const dispatch = useDispatch()
  const videos = useSelector((state) => state.youtube.videos)
  const initialState = { searchTerm: ""}
  const [searchBarState, setSearchBarState] = useState(initialState)

  const handleSubmit = async (termFromSearchBar) => {
    console.log('submit')
    try{
      const response = await youTube.get('/search', {
        params: {
          q: termFromSearchBar
        }
      })
      dispatch(loadVideos(response.data.items))
      console.log(videos)
    } catch(err) {
      console.log(err)
    }
    
  }


  const handleVideoSelect = () => {

  }

  const { searchTerm } = searchBarState

  return (
    <div>
      <Grow in>
      <Container>
      
        {/* <AppBar className={classes.appBar} position='static' color='inherit' > */}
        <SearchBar
          name='searchTerm'
          label='SearchTerm'
          value={searchTerm}
          onChange={(newValue) => setSearchBarState({value: newValue})}
          onRequestSearch={() => handleSubmit(searchBarState)}
        />
        {/* <Typography className={classes.heading} variant='h2' align='center'>Chambers</Typography> */}
        {/* <img className={classes.image}src={EchoImg} alt='echos' height="60" /> */}
        {/* </AppBar> */}
        {/* <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                <Echos setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
        </Grid> */}
      </Container>
  </Grow>
    </div>
  )
}

export default YoutubeList
