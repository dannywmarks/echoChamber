import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createChamber, updateChamber } from "../../actions/chambers";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const initialState = {
    creator: "",
    title: "",
    channel: "",
    notes: "",
    tags: "",
  };

  const [chamberData, setChamberData] = useState(initialState);
  const chamber = useSelector((state) =>
    currentId ? state.chambers.find((e) => e._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (chamber) setChamberData(chamber);
  }, [chamber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateChamber(currentId, chamberData));
    } else {
      dispatch(createChamber(chamberData));
    }
    clear();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChamberData((e) => ({ ...e, [name]: value }));
  };

  const clear = () => {
    setCurrentId(null);
    setChamberData(initialState);
  };

  const { creator, title, notes, tags, channel } = chamberData;

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create a Chamber</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={creator}
          onChange={handleChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={title}
          onChange={handleChange}
        />
        <TextField
          name="channel"
          variant="outlined"
          label="Channel"
          fullWidth
          value={channel}
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
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={tags}
          onChange={(e) =>
            setChamberData({ ...chamberData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setChamberData({ ...chamberData, selectedFile: base64 })
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
