import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { Link, withRouter } from 'react-router-dom'
import { createProfile, getCurrentProfile } from "../../actions/profile"

const EditProfileForm = ({ history }) => {
  
  const classes = useStyles();
  const currentProfile = useSelector(state => state.profile)
  const {loading, profile} = currentProfile
  
  const initialState = {
    rank: "",
    bio: "",
    interests: "",
    school: "",
  };
  const [profileData, setProfileData] = useState(initialState);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(getCurrentProfile())
    setProfileData({
      rank: loading || !profile.rank ? "" : profile.rank,
      bio: loading || !profile.bio ? "" : profile.bio,
      interests: loading || !profile.interests ? "" : profile.interests,
      school: loading || !profile.school ? "" : profile.school,
    })
  }, [loading])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProfile(profileData, history));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((e) => ({ ...e, [name]: value }));
  };

  const clear = () => {
    setProfileData(initialState);
  };

  const { rank, bio, interests, school } = profileData

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Edit a Profile</Typography>
        <TextField
          name="rank"
          variant="outlined"
          label="Rank"
          fullWidth
          value={rank}
          onChange={handleChange}
        />
        <TextField
          name="bio"
          variant="outlined"
          label="Bio"
          fullWidth
          value={bio}
          onChange={handleChange}
        />
        <TextField
          name="interests"
          variant="outlined"
          label="Interests"
          fullWidth
          value={interests}
          onChange={handleChange}
        />
        <TextField
          name="school"
          variant="outlined"
          label="School"
          fullWidth
          value={school}
          onChange={handleChange}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setProfileData({ ...profileData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default withRouter(EditProfileForm);