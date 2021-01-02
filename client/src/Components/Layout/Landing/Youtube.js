import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  Grow,
  AppBar,
} from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import youTube from "../../../api/youtube";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../../../actions/youtube";
import YouTubeDetail from "../../Youtube/YoutubeDetail/YoutubeDetail";
import YouTubeList from "../../Youtube/YoutubeList/YoutubeList";
import { selectVideo } from "../../../actions/youtube";
import useStyles from "./styles";

const Youtube = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const videos = useSelector((state) => state.youtube.videos);
  const selectedVideo = useSelector((state) => state.youtube.selectedVideo);
  const initialState = { searchTerm: "" };
  const [searchBarState, setSearchBarState] = useState(initialState);

  const handleSubmit = async (termFromSearchBar) => {
    console.log("submit");
    try {
      const response = await youTube.get("/search", {
        params: {
          q: termFromSearchBar,
        },
      });
      dispatch(loadVideos(response.data.items));
      console.log(videos);
    } catch (err) {
      console.log(err);
    }
  };

  const handleVideoSelect = (video) => {
    dispatch(selectVideo(video));
  };

  const { searchTerm } = searchBarState;

  return (
    <div>
      <Grow in>
        <Container>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">
              Search
            </Typography>
            <SearchBar
              name="searchTerm"
              label="SearchTerm"
              value={searchTerm}
              onChange={(newValue) => setSearchBarState({ value: newValue })}
              onRequestSearch={() => handleSubmit(searchBarState)}
            />
          </AppBar>
          <Grid
            container
            className={classes.mainContainer}
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <YouTubeDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <YouTubeList handleVideoSelect={handleVideoSelect} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Youtube;
