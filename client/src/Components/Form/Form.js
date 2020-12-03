import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { createEcho, updateEcho } from '../../actions/echos'
import useStyles from './styles';

const Form = ({currentId, setCurrentId}) => {

  const initialState = {
    creator: '',
    title: '',
    channel: '',
    notes: '',
    tags: '',
  }

  const [echoData, setEchoData] = useState(initialState)
  const echo = useSelector((state) => currentId ? state.echos.find((e) => e._id === currentId) : null)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if(echo) setEchoData(echo)
  }, [echo])


  const handleSubmit = e => {
    e.preventDefault()
    if(currentId) {
      dispatch(updateEcho(currentId, echoData))
    } else {
      dispatch(createEcho(echoData))
    }
    clear()
  }

  const handleChange = e => {
    const {name, value} = e.target
    setEchoData(e => ({ ...e, [name]: value}))
  }

  const clear = () => {
    setCurrentId(null)
    setEchoData(initialState)
  }
  

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
  <Typography variant="h6">{currentId ? 'Editing ' : 'Create '}an Echo</Typography>
        <TextField 
          name='creator' 
          variant='outlined' 
          label='Creator' 
          fullWidth
          value={echoData.creator}
          onChange={handleChange}/>
        <TextField 
          name='title' 
          variant='outlined' 
          label='Title' 
          fullWidth
          value={echoData.title}
          onChange={handleChange}/>
        <TextField 
          name='channel' 
          variant='outlined' 
          label='Channel' 
          fullWidth
          value={echoData.channel}
          onChange={handleChange}/>
        <TextField 
          name='notes' 
          variant='outlined' 
          label='Notes' 
          fullWidth
          value={echoData.notes}
          onChange={handleChange}/>
        <TextField 
          name='tags' 
          variant='outlined' 
          label='Tags' 
          fullWidth
          value={echoData.tags}
          onChange={(e) => setEchoData({ ...echoData, tags: e.target.value.split(',')})}/>
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({base64}) => setEchoData({ ...echoData, selectedFile: base64 })} 
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
          fullWidth>
            Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form
