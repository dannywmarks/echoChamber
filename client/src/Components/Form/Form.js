import React, {useState} from 'react'
import useStyles from './styles';
import { TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'

const Form = () => {

  const initialState = {
    creator: '',
    title: '',
    channel: '',
    notes: '',
    tags: '',
  }

  const [echoData, setEchoData] = useState(initialState)

  const classes = useStyles();
  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleChange = e => {
    const {name, value} = e.target
    setEchoData(e => ({ ...e, [name]: value}))
  }
  

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">Create an Echo</Typography>
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
          onChange={handleChange}/>
        <TextField 
          name='selectedFile' 
          variant='outlined' 
          label='Select Image' 
          fullWidth
          value={echoData.selectedFile}
          onChange={handleChange}/>
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({base64}) => setEchoData({ ...echoData, selectedFile: base64 })} 
            />
          </div>
      </form>
    </Paper>
  )
}

export default Form
