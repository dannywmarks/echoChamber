import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createEcho, updateEcho } from "../../actions/echos";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId, chamber_id}) => {
  const initialState = {
    title: "",
    videoLink: "",
    author:"",
    bookLink:"",
    webLink:"",
    notes: "",
    chamber_id:""
  };

  console.log(chamber_id)

  const [echoData, setEchoData] = useState(initialState);
  const echo = useSelector((state) =>
    currentId ? state.echos.find((e) => e._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (echo) setEchoData(echo);
  }, [echo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateEcho(currentId, echoData));
    } else {
      
      dispatch(createEcho(chamber_id, echoData));
    }
    clear();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEchoData((e) => ({ ...e, [name]: value }));
  };

  const clear = () => {
    setEchoData(initialState);
  };

  const { title, videoLink, bookLink, webLink, author, notes } = echoData;

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create an Echo</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={title}
          onChange={handleChange}
        />
        <TextField
          name="videoLink"
          variant="outlined"
          label="VideoLink"
          fullWidth
          value={videoLink}
          onChange={handleChange}
        />
        <TextField
          name="bookLink"
          variant="outlined"
          label="BookLink"
          fullWidth
          value={bookLink}
          onChange={handleChange}
        />
        <TextField
          name="webLink"
          variant="outlined"
          label="WebLink"
          fullWidth
          value={webLink}
          onChange={handleChange}
        />
        <TextField
          name="author"
          variant="outlined"
          label="Author"
          fullWidth
          value={author}
          onChange={handleChange}
        />
        <TextField
          name="notes"
          variant="outlined"
          label="Notes"
          fullWidth
          value={notes}
          onChange={handleChange}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setEchoData({ ...echoData, selectedFile: base64 })
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

export default Form;